import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Refund} from '../../models/original/refund.model';
import {SUCCESS} from '../../models/constants.model';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {RefundService} from '../../../services/refund.service';

@Component({
    selector: 'app-add-express-single-template',
    templateUrl: './add-express-single-template.component.html',
    styleUrls: ['./add-express-single-template.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddExpressSingleTemplateComponent implements OnInit {

    submitted: boolean = false;

    refund: Refund;

    constructor(private router: Router, private refundService: RefundService, private dialogService: DialogsService) {
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
                this.refundService.add(formValue.obj).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.dialogService.toast();
                        this.router.navigate(['/pages/refund/list']);
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

    ngOnInit() {
    }


}
