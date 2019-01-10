import {CommonList} from '../../../shared/common/common-list';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BannerService} from '../../../services/banner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogsService} from '../../components/dialogs/dialogs.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PageQuery} from '../../models/page-query.model';

@Component({
    selector: 'app-list-banner',
    templateUrl: './list-banner.component.html',
    styleUrls: ['./list-banner.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListBannerComponent extends CommonList implements OnInit {

    searchForm: FormGroup;

    constructor(public route: ActivatedRoute, public router: Router, private bannerService: BannerService, public dialogService: DialogsService, private fb: FormBuilder) {
        super(route, router, dialogService, bannerService);
        this.buildForm();
    }

    ngOnInit() {
        this.getDatas();
    }

    buildForm() {
        this.searchForm = this.fb.group({
            id: [null],
            guid: [null],
            title: [null],
            content: [null],
            imgPath: [null],
            url: [null],
            sort: [null],
            state: [null],
            createTime: [null],
            deleted: [null],
            delTime: [null],
        });
    }

    searchData() {
        this.configPageQuery(this.pageQuery);
        this.getDatas();
    }

    clearSearch() {
        this.searchForm.reset({
            id: null,
            guid: null,
            title: null,
            content: null,
            imgPath: null,
            url: null,
            sort: null,
            state: null,
            createTime: null,
            deleted: null,
            delTime: null,
        });
        this.pageQuery.clearFilter();
        this.searchData();
    }

    private configPageQuery(pageQuery: PageQuery) {
        pageQuery.clearFilter();
        const searchObj = this.searchForm.value;
        if (searchObj.title!=null) {
            pageQuery.addOnlyFilter('title', searchObj.title, 'contains');
        }
        if (searchObj.content!=null) {
            pageQuery.addOnlyFilter('content', searchObj.content, 'contains');
        }
        return pageQuery;
    }


}
