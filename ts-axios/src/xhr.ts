import { AxiosRequest, axiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/header'
import { transformData } from './helpers/data'
import { createError } from './helpers/error'

export default function xhr(config: AxiosRequest): axiosPromise {
  return new Promise((resolve, reject) => {
    const { url, data = null, method = 'get', headers = {}, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      //设置响应数据类型
      request.responseType = responseType
    }

    if (timeout) {
      //设置响应超时时间
      request.timeout = timeout
    }

    // open('请求方式','请求链接', '是否异步 ? 异步 => true : 同步 => false')
    request.open(method.toUpperCase(), url, true)

    //响应超时
    request.ontimeout = () => {
      reject(
        createError(`Timeout of ${config.timeout} ms exceeded`, config, 'ECONNABORTED', request)
      )
    }

    //网络异常错误
    request.onerror = () => {
      reject(createError('Network Error', config, null, request))
    }

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        //request.readyState不等于就是请求失败
        return
      }

      //获取请求头部
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())

      //获取响应数据 => 若responseType为text,返回responseText,否则返回response
      const responseData = transformData(
        responseType && responseType !== 'text' ? request.response : request.responseText
      )

      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      }

      handleResponse(response)

      function handleResponse(response: AxiosResponse) {
        if (response.status >= 200 && response.status <= 300) {
          resolve(response)
        } else {
          reject(
            createError(
              `Request failed with status code ${response.status}`,
              config,
              null,
              request,
              response
            )
          )
        }
      }
    }

    Object.keys(headers).forEach(name => {
      //如果data为null,那么设置content-type头部是没意义的
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    // 传输数据data
    request.send(data)
  })
}
