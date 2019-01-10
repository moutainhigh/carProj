
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Coupon} from '../../models/original/coupon.model';
import {SUCCESS} from '../../models/constants.model';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {CouponService} from '../../../services/coupon.service';

@Component({
    selector: 'app-add-storage-volume',
    templateUrl: './add-storage-volume.component.html',
    styleUrls: ['./add-storage-volume.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AddStorageVolumeComponent implements OnInit {

    submitted: boolean = false;

    coupon: Coupon;

    constructor(private router:Router,private couponService: CouponService, private dialogService: DialogsService) {
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
                formValue.obj.couponType=3
                this.couponService.add(formValue.obj).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.dialogService.toast();
                        this.router.navigate(['/pages/storage-volume/list']);
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