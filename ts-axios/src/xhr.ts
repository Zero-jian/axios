import { AxiosRequest } from './types';

export default function xhr(config: AxiosRequest): void {
    const {url, data = null, method = 'get'} = config;

    const request = new XMLHttpRequest();

    // open('请求方式','请求链接', '是否异步 ? 异步 => true : 同步 => false')
    request.open(method.toUpperCase(), url, true);

    // 传输数据data
    request.send(data);
}
