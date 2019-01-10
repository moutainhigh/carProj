

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SUCCESS} from '../../models/constants.model';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {RoleRescService} from '../../../services/role-resc.service';
import {RoleResc} from '../../models/original/role-resc.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-role-resc',
  templateUrl: './edit-role-resc.component.html',
  styleUrls: ['./edit-role-resc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditRoleRescComponent implements OnInit {

  submitted: boolean = false;

  roleResc: RoleResc;

  constructor(private route: ActivatedRoute,private router:Router,private roleRescService: RoleRescService, private dialogService: DialogsService) { }

  ngOnInit() {
      this.route.params.subscribe((params: ParamMap) => {
          this.getById(params["objId"]);
      });
  }

  getById(objId){
      this.roleRescService.getVoById(objId).subscribe(response => {
          if (response.result == SUCCESS) {
              this.roleResc = response.data;
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
                this.roleRescService.update(formValue.obj).subscribe(response => {
                    if (response.result == SUCCESS) {
                        this.dialogService.toast();
                                    this.router.navigate(['/pages/roleResc/list']);
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
