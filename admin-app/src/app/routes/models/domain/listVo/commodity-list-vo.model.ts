import {SupplierListVo} from "./supplier-list-vo.model";
import {ProductListVo} from "./product-list-vo.model";

export class CommodityListVo {

  /**
   * 报考ID
   */
  id: number;

  /**
   * GUID
   */
  guid: string;

  /**
   * 报考编码
   */
  commodityNo: string;

  /**
   * 报考名称
   */
  commodityName: string;

  /**
   * 报考简称
   */
  commodityShortName: string;

  /**
   * 供应商（supplier表ID）
   */
  supplier: SupplierListVo;

  /**
   * 排序
   */
  sort: number;

  /**
   * 是否参与分销(0参加1不参加)
   */
  distribution: number;

  /**
   * 佣金比例
   */
  commissionRate: number;

  integralRate: number;

  /**
   * 运费设置（1统一运费2运费模板）
   */
  freightSet: number;

  /**
   * 统一运费
   */
  unifiedFreight: number;

  /**
   * vip价
   */
  vipPrice: number;


  /**
   * 库存设置（1下单减库存2支付减库存）
   */
  stockSet: number;

  /**
   * 体积
   */
  volume: number;


  state:number;

  /**
   * 重量
   */
  weight: number;

  /**
   * 是否上架（1立即上架2放入仓库）
   */
  shelf: number;

  /**
   * 报考介绍
   */
  description: string;

  /**
   * 创建时间
   */
  createTime: string;

  /**
   * 删除（0否1是）
   */
  deleted: number;

  /**
   * 删除时间
   */
  delTime: string;

  /**
   * 图片路径
   */
  imgPath: string;


  product: ProductListVo;

  supplierName: string;

  products: ProductListVo[];

}
