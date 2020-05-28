基于TypeScript重构axios => TypeScript项目

axios模块功能：
1、通过XMLHttpRequest发起请求

2、get请求 => 发送params的参数，把params的参数拼接到URL上(get发送params参数)

3、post请求 => 发送data的参数，链接参数的拼接有无即可(post发送data参数)

4、请求header头部 => data存在数据的情况下，header默认设置 Content-Type = application/json;charset=utf-8，不存在的时候则不需要

5、Promise获取响应数据 => interface axiosPromise extends Promise<axiosResponse> => 是指axiosPromise继承Promise的数据结构，然后返回数据类型为axiosResponse   

6、响应header => 处理响应的header字符串，转化成对象

7、响应data => 若响应返回data为字符串，则转化成对象

8、增强Error数据 => 定义Error参数数据接口，创建的数据接口必须继承Error( interface AxiosError extends Error)在AxiosError里规定Error数据接口，然后使用面向对象的方法new构造函数创建数据对象并返回

dev    => 开发环境
master => 生产环境