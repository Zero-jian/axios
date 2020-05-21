// method规定的数据类型
type Method = 'get' | 'GET' 
    | 'delete'  | 'DELETE' 
    | 'head'    | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post'    | 'POST'
    | 'put'     | 'PUT'
    | 'patch'   | 'PATCH';

// 请求参数类型
//url => 链接   method => 请求方法  data => get请求数据 param => post请求数据
export interface AxiosRequest {
    url: string,
    method?: Method,
    data?: any,
    params?: any
}