

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Attachment} from '../../models/original/attachment.model';
import {AttachmentService} from '../../../services/attachment.service';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {SUCCESS} from '../../models/constants.model';

@Component({
  selector: 'app-view-attachment',
  templateUrl: './view-attachment.component.html',
  styleUrls: ['./view-attachment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewAttachmentComponent implements OnInit {

    attachment: Attachment=new Attachment;

    constructor(private route: ActivatedRoute,private location: Location,
                private attachmentService: AttachmentService, private dialogService: DialogsService) { }

    ngOnInit() {
        this.route.params.subscribe((params: ParamMap) => {
            this.getById(params["objId"]);
        });
    }

    getById(objId){
        this.attachmentService.getVoById(objId).subscribe(response => {
            if (response.result == SUCCESS) {
                this.attachment = response.data;
            } else {
                this.dialogService.alert('请求失败', response.message);
            }
        }, error => {
            this.dialogService.alert('请求错误', error.message);
        });
    }

    goBack(){
        this.location.back();
    }

}