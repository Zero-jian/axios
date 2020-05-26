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
//responseType => 请求数据类型 
//XMLHttpRequestResponseType定义值 => "" | "arraybuffer" | "blob" | "document" | "json" | "text" 
export interface AxiosRequest {
    url: string,
    method?: Method,
    data?: any,
    params?: any,
    headers?: any,
    responseType?: XMLHttpRequestResponseType
}

//响应数据类型
//data => 请求数据  status => 状态码  statusText => 状态消息  headers => 请求头数据
//config => 请求参数类型  request => XMLHttpRequest请求
export interface AxiosResponse {
    data: any,
    status: number,
    statusText: string,
    headers: string,
    config: AxiosRequest,
    request: any
}

//axiosPromise => 使用Promise数据类型，返回数据为AxiosResponse
export interface axiosPromise extends Promise<AxiosResponse> {

}

