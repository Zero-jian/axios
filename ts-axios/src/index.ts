import { AxiosRequest } from './types'
import { bulidURL } from './helpers/url'
import xhr from './xhr'

//把参数拼接到url上，params是get参数
function transformUrl(config: AxiosRequest): string {
  let { params, url } = config
  return bulidURL(url, params)
}

//处理url参数
function processConfig(config: AxiosRequest): void {
  config.url = transformUrl(config)
}

function axiox(config: AxiosRequest): void {
  processConfig(config)
  xhr(config)
}

export default axiox
