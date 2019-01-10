

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SUCCESS} from '../../models/constants.model';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {MemberLevelService} from '../../../services/member-level.service';
import {MemberLevel} from '../../models/original/member-level.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-member-level',
  templateUrl: './edit-member-level.component.html',
  styleUrls: ['./edit-member-level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditMemberLevelComponent implements OnInit {

  submitted: boolean = false;

  memberLevel: MemberLevel;

  constructor(private route: ActivatedRoute,private router:Router,private memberLevelService: MemberLevelService, private dialogService: DialogsService) { }

  ngOnInit() {
      this.route.params.subscribe((params: ParamMap) => {
          this.getById(params["objId"]);
      });
  }

  getById(objId){
      this.memberLevelService.getVoById(objId).subscribe(response => {
          if (response.result == SUCCESS) {
              this.memberLevel = response.data;
          } else {
              this.dialogService.alert('请求失败', response.message);
          }
      }, error => {
          this.dialogService.alert('请求错误', error.message);
      });
  }

    onTransmitFormValueSubscription(event) {
        if (event) {
            this.submitForm(event)
        }
    }

    submitForm(formValue) {
        if (this.submitted) {
            return;
        }
        this.dialogService.confirm('提示', '确认要提交吗？').then(result => {
            if (result) {
                this.submitted = true;
                formValue.obj.id=this.memberLevel.id;
                this.memberLevelService.update(formValue.obj).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.dialogService.toast();
                                    this.router.navigate(['/pages/member-level/list']);
                    } else {
                        this.dialogService.alert('请求失败', response.message);
                    }
                    this.submitted = false;
                }, error => {
                    this.dialogService.alert('请求错误', error.message);
                    this.submitted = false;
                });
            }
        });
    }
}