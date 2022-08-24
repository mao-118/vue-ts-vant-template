export type ResponseData = {
    code: number,
    msg?: string,
    message?: string,
    data: any
}
export type QueryType = {
    [propName: string]: string
}

export enum CLINET_COMMAND {
    /* 关闭浏览器指令 */
    CLOSE = 'onCloseBtnClick',
    /*  前往用户中心 */
    USER_CENTER = 'onUserCenterBtnClick',
    /* 注销账号后， 跳回APP登录首页 */
    cancellationAccountSuccessHandler = 'cancellationAccountSuccessHandler',
    cancellationAccountSuccessData = 'cancellationAccountSuccessData',
    //成为爵位用户，体验快速升级
    goNobility = 'goNobility',
    //前往福利中心
    GOWELFARECENTER = 'goWelfareCenter',
    RECHARGE = 'reCharge'
}