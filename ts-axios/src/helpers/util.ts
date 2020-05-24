const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val != null && typeof val === 'object'
}

//解决无法重新声明范围变量的问题
//CommonJS没有闭包模块的概念，定义的变量会自动提升到全局，所以会出现变量冲突
//使用export {}能使TypeScript认为这是模块，从而不会变量冲突
// export {}
