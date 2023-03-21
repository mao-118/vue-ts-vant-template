import { callClientMethod, judgePhoneType } from './index'
import { ClientMethod } from './typings'
// 实名认证
export function authentication(data: Record<string, any>) {
  callClientMethod(ClientMethod.authentication, data)
}
// 关闭浏览器
export function onCloseBtnClick() {
  callClientMethod(ClientMethod.onCloseBtnClick)
}
// 前往用户中心
export function onUserCenterBtnClick() {
  callClientMethod(ClientMethod.onUserCenterBtnClick)
}
// 前往福利中心
export function goWelfareCenter() {
  callClientMethod(ClientMethod.goWelfareCenter)
}
// 跳回登录页面
export function cancellationAccountSuccessHandler() {
  callClientMethod(ClientMethod.cancellationAccountSuccessHandler)
}
// 成为爵位
export function goNobility() {
  callClientMethod(ClientMethod.goNobility)
}
// 底部弹出充值弹窗 安卓 需使用 window.bridge.reCharge()
export function reCharge() {
  const { isIos } = judgePhoneType()
  if (isIos) {
    callClientMethod(ClientMethod.reCharge)
  } else {
    window.bridge.reCharge()
  }
}
// 跳转至发现首页
export function hotDynamic() {
  callClientMethod(ClientMethod.hotDynamic)
}
// 活体认证
export function openAuthentication() {
  callClientMethod(ClientMethod.openAuthentication)
}
// 跳转录音页面 回调 window.recordCallback(url：string)
export function goRecord() {
  callClientMethod(ClientMethod.goRecord)
}
// 跳转实名认证页面
export function gotoRealNameVCHandler() {
  callClientMethod(ClientMethod.gotoRealNameVCHandler)
}
// 跳转房间
export function onGotoLiveRoom(roomId: number) {
  callClientMethod(ClientMethod.onGotoLiveRoom, { roomId })
}
// 通用方法 一劳永逸
type ClientMethodType = keyof typeof ClientMethod
export function commonFun(key: ClientMethodType, data: Record<string, any>) {
  callClientMethod(ClientMethod[key], data)
}
