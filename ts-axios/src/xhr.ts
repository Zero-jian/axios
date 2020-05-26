import { AxiosRequest, axiosPromise, AxiosResponse } from './types';

export default function xhr(config: AxiosRequest): axiosPromise {

    return new Promise((resolve,reject) => {
        const {url, data = null, method = 'get', headers = {}, responseType} = config;

        const request = new XMLHttpRequest();

        if(responseType) {
            //设置响应数据类型
            request.responseType = responseType;
        }

        // open('请求方式','请求链接', '是否异步 ? 异步 => true : 同步 => false')
        request.open(method.toUpperCase(), url, true);

        request.onreadystatechange = function() {
            if(request.readyState !== 4) {
                //request.readyState不等于就是请求失败
                return;
            }

            //获取请求头部
            const responseHeaders = request.getAllResponseHeaders();

            //获取响应数据 => 若responseType为text,返回responseText,否则返回response
            const responseData = responseType && responseType !== 'text' ? request.response : request.responseText;

            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            } 
            
            resolve(response);
        }

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
    })
}
