基于TypeScript重构axios => TypeScript项目

axios模块功能：
1、通过XMLHttpRequest发起请求
2、get请求 => 发送params的参数，把params的参数拼接到URL上(get发送params参数)
3、post请求 => 发送data的参数，链接参数的拼接有无即可(post发送data参数)
4、header头部参数 => data存在数据的情况下，header默认设置 Content-Type = application/json;charset=utf-8，不存在的时候则不需要

dev    => 开发环境
master => 生产环境