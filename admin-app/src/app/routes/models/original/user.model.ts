import {Dept} from "./dept.model";

export class User {

    /**
       * 用户ID
     */
    id:number;

    /**
       * GUID
     */
    guid:string;

    /**
       * 部门（dept表ID）
     */
    dept:Dept;

    /**
       * 用户名
     */
    username:string;

    /**
       * 密码
     */
    password:string;

    /**
       * 姓名
     */
    fullName:string;

    /**
       * 手机号
     */
    phone:string;

    /**
       * 邮箱
     */
    email:string;

    /**
       * 工号
     */
    jobNo:string;

    /**
       * 头像
     */
    avatar:string;

    /**
       * 状态（0启用1禁用）
     */
    state:number;

    /**
       * 创建时间
     */
    createTime:string;
}
