export enum ClientMethod {
  authentication = 'authentication', // 实名认证，具体参数由接口返回
  onCloseBtnClick = 'onCloseBtnClick', // 关闭浏览器
  onUserCenterBtnClick = 'onUserCenterBtnClick', // 前往用户中心
  goWelfareCenter = 'goWelfareCenter', // 前往福利中心
  cancellationAccountSuccessHandler = 'cancellationAccountSuccessHandler', // 跳回登录页面
  goNobility = 'goNobility', // 成为爵位
  reCharge = 'reCharge', // 底部弹出充值弹窗 安卓 需使用 window.bridge.reCharge()
  hotDynamic = 'hotDynamic', // 跳转至发现首页
  openAuthentication = 'openAuthentication', // 活体认证  window.authCallback()
  goRecord = 'goRecord', // 跳转录音页面 window.recordCallback(url：string)
  gotoRealNameVCHandler = 'gotoRealNameVCHandler', // 跳转实名认证页面
  onGotoLiveRoom = 'onGotoLiveRoom', // 跳转房间
}
export type Result<D = any> = {
  code?: number
  message?: string
  msg?: string
  data?: D
}
