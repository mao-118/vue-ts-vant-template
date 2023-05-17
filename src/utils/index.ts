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
 * 获取正确的bridge对象,用来和app交互
 * 针对安卓和ios系统，对window.WebViewJavascriptBridge进行兼容性处理
 *  */
function setupWebViewJavascriptBridge(callback: (bridge: any) => void) {
  const { isAndroid, isIos } = judgePhoneType()
  // Android使用
  if (isAndroid) {
    if (window.WebViewJavascriptBridge) {
      callback(window.WebViewJavascriptBridge)
    } else {
      // 添加dom事件
      document.addEventListener(
        'WebViewJavascriptBridgeReady',
        function () {
          callback(window.WebViewJavascriptBridge)
        },
        false
      )
    }
  }

  // iOS使用
  if (isIos) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    const WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
}
// 注册回调函数，第一次连接时调用 初始化函数(android需要初始化,ios不用)
setupWebViewJavascriptBridge(function (bridge) {
  const { isAndroid } = judgePhoneType()
  if (isAndroid) {
    // 初始化
    bridge.init(function (message: any, responseCallback: any) {
      const data = {
        'Javascript Responds': 'Wee!',
      }
      responseCallback(data)
    })
  }
})

/**
 * js调用app方法
 * @param name app提供的方法名
 * @param data 传给app的参数
 * @param callback app返回的回调 会将所需的数据当作参数返回
 */
export function appCallHandler(name: string, data: any, callback: any) {
  setupWebViewJavascriptBridge((bridge) => {
    bridge.callHandler(name, data, callback)
  })
}
/**
 * app调用js方法
 * @param name js提供的方法名
 * @param callback app返回的回调 会将所需的数据当作参数返回
 */
export function appRegisterHandler(name: string, callback: any) {
  setupWebViewJavascriptBridge((bridge) => {
    bridge.registerHandler(name, (data: any, responseCallback: any) => {
      callback(data, responseCallback)
    })
  })
}
/**
 * 获取app给到的请求头参数，h5必须有这些参数，否则请求不成功
 * @param callback 会将所需的参数给到该回调函数
 */
export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    const { isAndroid, isIos } = judgePhoneType()
    if (isAndroid || isIos) {
      appCallHandler(
        'userInfo',
        [
          'uid',
          'token',
          'appVersion',
          'DeviceId',
          'CustomDeviceId',
          'osType',
          'timeStamp',
          'tokenSign',
          'osVersion',
          'deviceName',
          'name',
          'sex',
          'enrollmentYear',
          'role',
        ],
        (userInfo: any) => {
          const { name, sex, enrollmentYear, role, ...header } = JSON.parse(userInfo)
          resolve({
            name,
            sex,
            enrollmentYear,
            role,
            header,
          })
        }
      )
    } else {
      const userInfo = localStorage.getItem('userInfo') || getHrefParams('option')
      localStorage.setItem('userInfo', userInfo)
      resolve(JSON.parse(userInfo))
    }
  })
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
