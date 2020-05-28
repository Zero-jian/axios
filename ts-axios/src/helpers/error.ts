import { AxiosRequest, AxiosResponse, AxiosError } from '../types'

export class AxiosErrorClass extends Error {
  isAxiosError: boolean
  config: AxiosRequest
  request?: any
  response?: AxiosResponse
  code?: string | null

  constructor(
    message: string,
    config: AxiosRequest,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosErrorClass.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequest,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  let err = new AxiosErrorClass(message, config, code, request, response)
  return err
}
