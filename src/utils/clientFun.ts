import { callClientMethod, judgePhoneType } from './index'

// 实名认证
export function authentication(data: Record<string, any>) {
  callClientMethod(UtilTypes.ClientMethod.authentication, data)
}
// 关闭浏览器
export function onCloseBtnClick() {
  callClientMethod(UtilTypes.ClientMethod.onCloseBtnClick)
}
// 前往用户中心
export function onUserCenterBtnClick() {
  callClientMethod(UtilTypes.ClientMethod.onUserCenterBtnClick)
}
// 前往福利中心
export function goWelfareCenter() {
  callClientMethod(UtilTypes.ClientMethod.goWelfareCenter)
}
// 跳回登录页面
export function cancellationAccountSuccessHandler() {
  callClientMethod(UtilTypes.ClientMethod.cancellationAccountSuccessHandler)
}
// 成为爵位
export function goNobility() {
  callClientMethod(UtilTypes.ClientMethod.goNobility)
}
// 底部弹出充值弹窗 安卓 需使用 window.bridge.reCharge()
export function reCharge() {
  const { isIos } = judgePhoneType()
  if (isIos) {
    callClientMethod(UtilTypes.ClientMethod.reCharge)
  } else {
    window.bridge.reCharge()
  }
}
// 跳转至发现首页
export function hotDynamic() {
  callClientMethod(UtilTypes.ClientMethod.hotDynamic)
}
// 活体认证
export function openAuthentication() {
  callClientMethod(UtilTypes.ClientMethod.openAuthentication)
}
// 跳转录音页面 回调 window.recordCallback(url：string)
export function goRecord() {
  callClientMethod(UtilTypes.ClientMethod.goRecord)
}
// 跳转实名认证页面
export function gotoRealNameVCHandler() {
  callClientMethod(UtilTypes.ClientMethod.gotoRealNameVCHandler)
}
// 跳转房间
export function onGotoLiveRoom(roomId: number) {
  callClientMethod(UtilTypes.ClientMethod.onGotoLiveRoom, { roomId })
}
// 通用方法 一劳永逸
type ClientMethodType = keyof typeof UtilTypes.ClientMethod
export function commonFun(key: ClientMethodType, data: Record<string, any>) {
  callClientMethod(UtilTypes.ClientMethod[key], data)
}
