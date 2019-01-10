

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Brand} from '../../models/original/brand.model';
import {BrandService} from '../../../services/brand.service';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {SUCCESS} from '../../models/constants.model';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewBrandComponent implements OnInit {

    brand: Brand=new Brand;

    constructor(private route: ActivatedRoute,private location: Location,
                private brandService: BrandService, private dialogService: DialogsService) { }

    ngOnInit() {
        this.route.params.subscribe((params: ParamMap) => {
            this.getById(params["objId"]);
        });
    }

    getById(objId){
        this.brandService.getVoById(objId).subscribe(response => {
            if (response.result == SUCCESS) {
                this.brand = response.data;
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
