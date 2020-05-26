import { AxiosRequest, axiosPromise } from './types'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeader } from './helpers/header'
import xhr from './xhr'

//把参数拼接到url上，params是get参数
function transformUrl(config: AxiosRequest): string {
  let { params, url } = config
  return bulidURL(url, params)
}

//自动添加header参数
function transformHeader(config: AxiosRequest): string {
  let {headers = {}, data} = config;
  return processHeader(headers, data);
}

//处理url参数
function processConfig(config: AxiosRequest): void {
  config.url = transformUrl(config)
  config.headers = transformHeader(config);
  config.data = transformRequest(config.data);
}

function axiox(config: AxiosRequest): axiosPromise {
  processConfig(config)
  return xhr(config)
}

export default axiox
