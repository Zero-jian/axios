import { isPlainObject } from './util';

//POST请求，把data数据转化JSON
export function transformRequest(data: any): any {
    if(isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}