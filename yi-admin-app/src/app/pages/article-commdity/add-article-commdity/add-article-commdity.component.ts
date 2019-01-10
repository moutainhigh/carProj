import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleCommdity} from '../../models/original/article-commdity.model';
import {SUCCESS} from '../../models/constants.model';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {ArticleCommdityService} from '../../../services/article-commdity.service';

@Component({
    selector: 'app-add-article-commdity',
    templateUrl: './add-article-commdity.component.html',
    styleUrls: ['./add-article-commdity.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddArticleCommdityComponent implements OnInit {

    submitted: boolean = false;

    articleCommdity: ArticleCommdity;

    constructor(private router: Router, private articleCommdityService: ArticleCommdityService, private dialogService: DialogsService) {
    }

    ngOnInit() {
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
        this.dialogService.confirm('提示', '确认要提交吗？').then((result) => {
            if (result) {
                this.submitted = true;
                this.articleCommdityService.add(formValue.obj).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.dialogService.toast();
                        this.router.navigate(['/pages/articleCommdity/list']);
                    } else {
                        this.dialogService.alert('请求失败', response.message);
                    }
                    this.submitted = false;
                }, error => {
                    this.dialogService.alert('请求错误', error.message);
                    this.submitted = false;
                });
            }
        }, () => {
            this.submitted = false;
        });
    }
}
