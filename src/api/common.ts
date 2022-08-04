/**
 * 公共基础接口封装
 */
// import request from '@/utils/request'
// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

// export const getLoginInfo = () => {
//   return request.get<
//     ResponseData<{
//       logo_square: string
//       logo_rectangle: string
//       login_logo: string
//       slide: string[]
//     }>
//   >('/lohgin/info')
// }
// src\api\common.ts
import request from '@/utils/request'
import type { ILoginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: 'admin/login/info'
  })
}
