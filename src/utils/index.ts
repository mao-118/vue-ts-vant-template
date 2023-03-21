import { ClientMethod } from './typings'
/**
 * 地址参数获取
 * tips: 获取参数的过程中，可能客户端传递的是编码过的地址，所以需要解码一下
 * 目前碰到过的两种编码码： encodeURI()编码 => decodeURI()解码 和 encodeURIComponent()编码 => decodeURIComponent()解码
 * 如果是这两种对应的编码方式，获取到地址之后外面用对应的解码方法包裹一下即可
 */
export function getHrefParams(key: string): string {
  const query: string = decodeURIComponent(window.location.href).split('?')[1]?.split('#/')[0] // 根路径下hash模式会自动在末尾拼接 #/
  const variable: Record<string, string> = {}
  if (query) {
    const variableList: string[] = query.split('&')
    variableList.forEach((item) => {
      const [k] = item.split('=')
      variable[k] = item.replace(`${k}=`, '').replace(/\s/g, '+') // 防止参数携带=号，比如token就可能存在=
    })
  }
  return variable[key]
}
/**
 * 获取token,活动专用
 * */
export function getToken(): string {
  return getHrefParams('token')
}

/**
 * 判断手机类型
 */
export function judgePhoneType() {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return { isAndroid, isIos }
}

/**
 * 调用IOS | android API接口方法
 * 消息传送
 * type: 执行操作类型
 * CLINETMETHOD 枚举对象
 * data: 所需要的参数
 *     和IOS安卓协商参数
 * */
export function callClientMethod(type: ClientMethod, params = {}) {
  type materialsType = Record<string, any>
  const materials: materialsType = { type }
  const { isIos, isAndroid } = judgePhoneType()
  if (isIos) {
    materials.params = params
    window.webkit.messageHandlers.common.postMessage(JSON.stringify(materials))
  } else if (isAndroid) {
    materials.data = params
    window.bridge.postMessage(JSON.stringify(materials))
  }
}
/**
 * 版本比较
 * @param ver1
 * @param ver2
 * @returns
 */
export function versionfunegt(ver1: string, ver2: string): boolean {
  const version1pre = parseFloat(ver1)
  const version2pre = parseFloat(ver2)
  const version1next = parseInt(ver1.replace(version1pre + '.', ''))
  const version2next = parseInt(ver2.replace(version2pre + '.', ''))
  if (version1pre > version2pre) {
    return true
  } else if (version1pre < version2pre) {
    return false
  } else {
    if (version1next >= version2next) {
      return true
    } else {
      return false
    }
  }
}

/**
 * getAssetsFile
 * @desc 获取静态资源地址
 * @param dir 文件夹名称
 * @param url 文件名
 */
export function getAssetsFile(url: string): string {
  return new URL(`../assets/${url}`, import.meta.url).href
}
