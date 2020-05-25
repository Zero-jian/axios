import { isPlainObject } from './util';

function normalizeHeader(header: any, normal: string): void {
    if(!header) return;

    Object.keys(header).forEach(name => {
        if(name !== normal && name.toUpperCase() === normal.toUpperCase()) {
            header[normal] = header[name];
            delete header[name];
        }
    })
}

export function processHeader(header: any, data: any): any {
    // 初始化Content-Type
    normalizeHeader(header, 'Content-Type');

    // 当data为对象的时候，header设置Content-Type才有意义
    if(isPlainObject(data)) {
        if(header && !header['Content-Type']) {
            header['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return header;
}