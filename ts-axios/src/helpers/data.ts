import { isPlainObject } from './util';

//POST请求，把data数据转化JSON
export function transformRequest(data: any): any {
    if(isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}

export function transformData(data: any): any {
    if(typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch(e) {
            console.log(`响应参数data转换对象失败: ${e}`);
        }
    }

    return data;
}