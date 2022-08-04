import { QueryType } from './types';
/**
 *
 * tips: 获取参数的过程中，可能客户端传递的是编码过的地址，所以需要解码一下
 * 目前碰到过的两种编码码： encodeURI()编码 => decodeURI()解码 和 encodeURIComponent()编码 => decodeURIComponent()解码
 * 如果是这两种对应的编码方式，获取到地址之后外面用对应的解码方法包裹一下即可
 */
/*
 *  地址参数获取
 * */
export function getHrefParams(key: string): string {
    const query: string = decodeURI(window.location.href).split('?')[1]?.split('#/')[0]; //根路径下hash模式会自动在末尾拼接 #/
    const variable: QueryType = {};
    if (query) {
        const variableList: string[] = query.split('&');
        variableList.forEach(item => {
            const [k] = item.split('=');
            variable[k] = item.replace(`${k}=`, '').replace(/\s/g, '+');//防止参数携带=号，比如token就可能存在=
        });
    }
    return variable[key];
}
/*
 * 获取token,活动专用
 * */
export function getToken(): string {
    return decodeURIComponent(
        window.location.search.substring(1).replace('token=', '')
    ).replace(/\s/g, '+');
}