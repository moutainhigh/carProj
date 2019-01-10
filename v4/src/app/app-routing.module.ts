import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'CategoryPage', loadChildren: './category/category.module#CategoryPageModule'},
    {path: 'LoveLifePage', loadChildren: './love-life/love-life.module#LoveLifePageModule'},
    {path: 'ShoppingCartPage', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule'},
    {path: 'CustomerCenterPage', loadChildren: './customer-center/customer-center.module#CustomerCenterPageModule'},
    {path: 'CommodityPage', loadChildren: './commodity/commodity.module#CommodityPageModule'},
    {path: 'InvitesCourtesyPage', loadChildren: './invites-courtesy/invites-courtesy.module#InvitesCourtesyPageModule'},
    {path: 'MyTeamPage', loadChildren: './my-team/my-team.module#MyTeamPageModule'},
    {path: 'AwaitPage', loadChildren: './rule-info/await/await.module#AwaitPageModule'},
    {path: 'ServiceCenterPage', loadChildren: './service-center/service-center.module#ServiceCenterPageModule'},
    {path: 'SignInPage', loadChildren: './sign-in/sign-in.module#SignInPageModule'},
    {path: 'ArticleDetailPage', loadChildren: './article-detail/article-detail.module#ArticleDetailPageModule'},
    {path: 'LocationPage', loadChildren: './location/location.module#LocationPageModule'},
    {path: 'NewsPage', loadChildren: './news/news.module#NewsPageModule'},
    {path: 'MyBalancePage', loadChildren: './my-balance/my-balance.module#MyBalancePageModule'},
    {path: 'StorageVolumePage', loadChildren: './coupon-about/storage-volume/storage-volume.module#StorageVolumePageModule'},
    {path: 'CommListPage', loadChildren: './comm-list/comm-list.module#CommListPageModule'},

    {path: 'PersonalCenterPage', loadChildren: './personal-center/personal-center.module#PersonalCenterPageModule'},
    {path: 'MyCodePage', loadChildren: './rule-info/my-code/my-code.module#MyCodePageModule'},
    {path: 'SystemSetPage', loadChildren: './system-set/system-set.module#SystemSetPageModule'},
    {path: 'MyCommunityPage', loadChildren: './my-community/my-community.module#MyCommunityPageModule'},
    {path: 'FineBalancePage', loadChildren: './fine-balance/fine-balance.module#FineBalancePageModule'},
    {path: 'MyOrderPage', loadChildren: './my-order/my-order.module#MyOrderPageModule'},
    {path: 'StayEvaluationPage', loadChildren: './rule-info/stay-evaluation/stay-evaluation.module#StayEvaluationPageModule'},

    {path: 'ApplyReturnPage', loadChildren: './after-sales/apply-return/apply-return.module#ApplyReturnPageModule'},
    {path: 'AuditProgressPage', loadChildren: './after-sales/audit-progress/audit-progress.module#AuditProgressPageModule'},
    {path: 'RecordDetailPage', loadChildren: './after-sales/record-detail/record-detail.module#RecordDetailPageModule'},
    {path: 'AfterSalesPage', loadChildren: './after-sales/after-sales.module#AfterSalesPageModule'},

    {path: 'MyAddressPage', loadChildren: './my-address/my-address.module#MyAddressPageModule'},
    {path: 'ConsigneePage', loadChildren: './consignee/consignee.module#ConsigneePageModule'},
    {path: 'ChangePhonePage', loadChildren: './change-phone/change-phone.module#ChangePhonePageModule'},
    {path: 'WriteOrderPage', loadChildren: './write-order/write-order.module#WriteOrderPageModule'},
    {path: 'EvaluationPage', loadChildren: './evaluation/evaluation.module#EvaluationPageModule'},
    {path: 'FaqPage', loadChildren: './rule-info/faq/faq.module#FaqPageModule'},
    {path: 'ForgetPasswordPage', loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule'},
    {path: 'AccountsSecurityPage', loadChildren: './accounts-security/accounts-security.module#AccountsSecurityPageModule'},
    {path: 'SearchResultPage', loadChildren: './search-result/search-result.module#SearchResultPageModule'},
    {path: 'ArticleCommentPage', loadChildren: './article-comment/article-comment.module#ArticleCommentPageModule'},
    {path: 'ChooseConsigneePage', loadChildren: './choose-consignee/choose-consignee.module#ChooseConsigneePageModule'},
    {path: 'OrderDetailPage', loadChildren: './order-detail/order-detail.module#OrderDetailPageModule'},
    {path: 'PersonalInfoPage', loadChildren: './personal-info/personal-info.module#PersonalInfoPageModule'},
    {path: 'OrderFollowPage', loadChildren: './order-follow/order-follow.module#OrderFollowPageModule'},
    {path: 'RegisterPage', loadChildren: './register/register.module#RegisterPageModule'},
    {path: 'LoginPage', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'GrowthValuePage', loadChildren: './growth-value/growth-value.module#GrowthValuePageModule'},
    {path: 'InviteRulePage', loadChildren: './rule-info/invite-rule/invite-rule.module#InviteRulePageModule'},
    {path: 'VersionUpPage', loadChildren: './version-up/version-up.module#VersionUpPageModule'},
    {path: 'VersionNumberPage', loadChildren: './version-number/version-number.module#VersionNumberPageModule'},
    {path: 'RewardRulePage', loadChildren: './reward-rule/reward-rule.module#RewardRulePageModule'},
    {path: 'RecommendPage', loadChildren: './recommend/recommend.module#RecommendPageModule'},
    {path: 'ChangePwdPage', loadChildren: './change-pwd/change-pwd.module#ChangePwdPageModule'},
    {path: 'ChangePaymentPwdPage', loadChildren: './change-payment-pwd/change-payment-pwd.module#ChangePaymentPwdPageModule'},
    {path: 'PaymentOrderPage', loadChildren: './payment-order/payment-order.module#PaymentOrderPageModule'},
    {path: 'PaymentFinishPage', loadChildren: './payment-finish/payment-finish.module#PaymentFinishPageModule'},
    {path: 'MemberGradePage', loadChildren: './member-grade/member-grade.module#MemberGradePageModule'},
    {path: 'GradeRulePage', loadChildren: './rule-info/grade-rule/grade-rule.module#GradeRulePageModule'},
    {path: 'CouponReceivePage', loadChildren: './coupon-about/coupon-receive/coupon-receive.module#CouponReceivePageModule'},
    {path: 'CouponReceiveFinishPage', loadChildren: './coupon-about/coupon-receive-finish/coupon-receive-finish.module#CouponReceiveFinishPageModule'},
    {path: 'NationalGroupPurchasePage', loadChildren: './group-national/national-group-purchase/national-group-purchase.module#NationalGroupPurchasePageModule'},
    {path: 'CommodityGroupPage', loadChildren: './group-national/commodity-group/commodity-group.module#CommodityGroupPageModule'},
    {path: 'CommodityFlashPage', loadChildren: './flash-active/commodity-flash/commodity-flash.module#CommodityFlashPageModule'},
    {path: 'FlashPurchasePage', loadChildren: './flash-active/flash-purchase/flash-purchase.module#FlashPurchasePageModule'},
    {path: 'PaymentFailPage', loadChildren: './payment-fail/payment-fail.module#PaymentFailPageModule'},
    {path: 'CommunityGroupPurchasePage', loadChildren: './group-community/community-group-purchase/community-group-purchase.module#CommunityGroupPurchasePageModule'},
    {path: 'CashbackGroupPurchasePage', loadChildren: './cashback-active/cashback-group-purchase/cashback-group-purchase.module#CashbackGroupPurchasePageModule'},
    {path: 'CouponPage', loadChildren: './coupon-about/coupon/coupon.module#CouponPageModule'},
    {path: 'AreaDoubleStarPage', loadChildren: './area-double-star/area-double-star.module#AreaDoubleStarPageModule'},
    {path: 'AgreementPage', loadChildren: './rule-info/agreement/agreement.module#AgreementPageModule'},
    {path: 'AreaGiftPage', loadChildren: './area-gift/area-gift.module#AreaGiftPageModule'},
    {path: 'ConfirmGiftPage', loadChildren: './area-gift/confirm-gift/confirm-gift.module#ConfirmGiftPageModule'},
    {path: 'ShareGiftPage', loadChildren: './area-gift/share-gift/share-gift.module#ShareGiftPageModule'},
    {path: 'ReceiveGiftPage', loadChildren: './area-gift/receive-gift/receive-gift.module#ReceiveGiftPageModule'},




];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
