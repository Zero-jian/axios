import { AxiosRequest } from './types';

export default function xhr(config: AxiosRequest): void {
    const {url, data = null, method = 'get', headers = {}} = config;

    const request = new XMLHttpRequest();

    // open('请求方式','请求链接', '是否异步 ? 异步 => true : 同步 => false')
    request.open(method.toUpperCase(), url, true);

    Object.keys(headers).forEach(name => {
        //如果data为null,那么设置content-type头部是没意义的
        if(data === null && name.toLowerCase() === 'content-type') {
            delete headers[name];
        } else {
            request.setRequestHeader(name, headers[name]);
        }
    })

    // 传输数据data
    request.send(data);
}
