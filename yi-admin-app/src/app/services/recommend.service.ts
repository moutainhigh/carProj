import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {AppConfig} from "../pages/configs/app-config";
import {BehaviorSubject} from "rxjs/BehaviorSubject";



@Injectable()
export class RecommendService extends BaseService {

  onRefreshFileManager:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(null);

    constructor(protected http: HttpClient, protected appConfig: AppConfig) {
    super(http, appConfig, "recommend");
    }

    setRefreshFileManager(){
    this.onRefreshFileManager.next(true);
    }

    /**
     * 推荐位启用 禁用
     * @param id
     * @param shel=0启用  shelf=1禁用
     * @returns {Observable<any>}
     */
    banKai(recommendId){
        return this.getByParams("updateShelf", {recommendId: recommendId })
    }

    /**
     *  禁用
     * @param id
     * @param 禁用
     * @returns {Observable<any>}
     */
    updateStateDisable(recommendId){
        return this.getByParams("updateStateDisable", {recommendId: recommendId })
    }

    /**
     *  启用
     * @param id
     * @param 启用
     * @returns {Observable<any>}
     */
    updateStateEnable(recommendId){
        return this.getByParams("updateStateEnable", {recommendId: recommendId })
    }

}
