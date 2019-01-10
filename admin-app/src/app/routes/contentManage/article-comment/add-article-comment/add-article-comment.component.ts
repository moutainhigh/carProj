import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ArticleComment} from '../../../models/original/article-comment.model';
import {ArticleCommentService} from '../../../services/article-comment.service';
import {SUCCESS} from '../../../models/constants.model';

@Component({
  selector: 'add-article-comment',
  templateUrl: './add-article-comment.component.html',
  styleUrls: ['./add-article-comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddArticleCommentComponent implements OnInit {

  submitting = false;

  articleComment: ArticleComment;

  constructor(private router: Router, private articleCommentService: ArticleCommentService, public msgSrv: NzMessageService,
              private modalService: NzModalService) {
  }

  ngOnInit() {
  }

  onTransmitFormValueSubscription(event) {
    if (event) {
      this.submitForm(event)
    }
  }


  submitForm(formValue) {
    if (formValue) {
      this.submitting = true;
      const messageId = this.msgSrv.loading("正在提交...").messageId;
      this.articleCommentService.add(formValue.obj).subscribe(response => {
        if (response.result == SUCCESS) {
          this.msgSrv.success("操作成功");
          this.router.navigate(['/dashboard/article-comment/list']);
        } else {
          this.msgSrv.error('请求失败' + response.message);
        }
        this.msgSrv.remove(messageId);
        this.submitting = false;
      }, error => {
        this.msgSrv.error('请求错误' + error.message);
        this.msgSrv.remove(messageId);
        this.submitting = false;
      });
    }
  }

}
