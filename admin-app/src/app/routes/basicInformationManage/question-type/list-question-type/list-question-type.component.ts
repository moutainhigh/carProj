
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { PageQuery } from '../../../models/page-query.model';
import { QuestionTypeService } from '../../../services/question-type.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SUCCESS } from "../../../models/constants.model";

@Component({
    selector: 'list-question-type',
    templateUrl: './list-question-type.component.html',
    styleUrls: ['./list-question-type.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListQuestionTypeComponent implements OnInit {

    pageQuery: PageQuery = new PageQuery();

    searchForm: FormGroup;

    loading = false;

    datas: any[] = [];

    expandForm = false;

    constructor(public route: ActivatedRoute, public router: Router, private questionTypeService: QuestionTypeService, public msg: NzMessageService,
        private fb: FormBuilder,private modalService: NzModalService) {
        this.buildForm();
    }

    ngOnInit() {
        this.searchData();
    }

  chooseSwitch(i) {
    let state = this.datas[i].state, id = this.datas[i].id;
    if (state == 0) {
      //禁用
      this.questionTypeService.disable(id).subscribe(response => {
        if (response.result == SUCCESS) {
          this.msg.success("禁用成功");
          this.datas[i].state = 1
        } else {
          this.msg.error('请求失败' + response.message);
        }
      }, error => {
        this.msg.error('请求失败' + error.message);
      });
    } else if (state == 1) {
      //启用
      this.questionTypeService.disable(id).subscribe(response => {
        if (response.result == SUCCESS) {
          this.msg.success("启用成功");
          this.datas[i].state = 0
        } else {
          this.msg.error('请求失败' + response.message);
        }
      }, error => {
        this.msg.error('请求失败' + error.message);
      });
    }
  }

  buildForm() {
        this.searchForm = this.fb.group({
        id:[null],
        guid:[null],
        typeName:[null],
        sort:[null],
        state:[null],
        createTime:[null],
        deleted:[null],
        delTime:[null],
        });
    }

    sort(sort: { key: string, value: string }): void {
        this.pageQuery.addSort(sort.key,sort.value)
        this.searchData();
    }

    searchData(reset: boolean = false): void {
        if (reset) {
            this.pageQuery.resetPage();
        }
        this.configPageQuery(this.pageQuery);
        this.getData();
    }

    getData() {
        this.loading = true;
        this.questionTypeService.query(this.pageQuery).subscribe(response => {
            this.datas=response['content'];
            this.pageQuery.covertResponses(response);
            this.loading = false;
        }, error => {
            this.loading = false;
            this.msg.error('请求错误'+ error.message);
        });
    }

    clearSearch() {
        this.searchForm.reset({
        id:null,
        guid:null,
        typeName:null,
        sort:null,
        state:null,
        createTime:null,
        deleted:null,
        delTime:null,
        });
        this.pageQuery.clearFilter();
        this.searchData();
    }

    remove(questionTypeId) {
        this.modalService.confirm({
            nzTitle  : '<i>提示！</i>',
            nzContent: '<b>确认要删除吗？</b>',
            nzOnOk   : () => {
                this.questionTypeService.removeById(questionTypeId).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.msg.success("删除成功");
                        this.getData();
                    } else {
                        this.msg.error('请求失败' + response.message);
                    }
                }, error => {
                    this.msg.error('请求失败' + error.message);
                });
            }
        });
    }

    private configPageQuery(pageQuery: PageQuery) {
        pageQuery.clearFilter();
        const searchObj = this.searchForm.value;
            if (searchObj.id != null) {
                pageQuery.addOnlyFilter('id', searchObj.id, 'contains');
            }
            if (searchObj.guid != null) {
                pageQuery.addOnlyFilter('guid', searchObj.guid, 'contains');
            }
            if (searchObj.typeName != null) {
                pageQuery.addOnlyFilter('typeName', searchObj.typeName, 'contains');
            }
            if (searchObj.sort != null) {
                pageQuery.addOnlyFilter('sort', searchObj.sort, 'contains');
            }
            if (searchObj.state != null) {
                pageQuery.addOnlyFilter('state', searchObj.state, 'contains');
            }
            if (searchObj.createTime != null) {
                pageQuery.addOnlyFilter('createTime', searchObj.createTime, 'contains');
            }
            if (searchObj.deleted != null) {
                pageQuery.addOnlyFilter('deleted', searchObj.deleted, 'contains');
            }
            if (searchObj.delTime != null) {
                pageQuery.addOnlyFilter('delTime', searchObj.delTime, 'contains');
            }
        return pageQuery;
    }


}
