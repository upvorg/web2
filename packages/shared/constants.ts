import { Cookie } from './utils/cookie'
import http from './http'

// webpack proxy
export const HOST = __HOST__
export const API_HOST = __API_HOST__
export const STORGE_HOST = __STORAGE_HOST__
export const ADMIN_HOST = __ADMIN_HOST__

export const LOCAL_STORAGE_USER_INFO_KEY = 'USER_INFO'
export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'
export const COOKIE_ACCESS_TOKEN_KEY = 'access_token'

export const PRIMARY_COLOR = '#6668ab'

export const USER_LEVEL_MAP = {
  4: '普通用户',
  3: '创作者',
  2: '管理员',
  1: '超级管理员'
}

export const enum POST_STATUS {
  DRAFT = 5,
  PUBLISHED = 4,
  PENDING = 3,
  REJECT = 2,
  DELETED = 1,
  ALL = ''
}

export const POST_STATUS_MAP = {
  [POST_STATUS.PUBLISHED]: '已发布',
  [POST_STATUS.PENDING]: '待审核',
  [POST_STATUS.REJECT]: '已下架',
  [POST_STATUS.ALL]: '全部'
}

export enum USER_LEVEL {
  NORMAL = 4,
  CREATOR = 3,
  ADMIN = 2,
  ROOT = 1
}

const axios = http.create<R.Response<any>>(API_HOST, {
  config: {
    credentials: 'include'
  }
})

axios.interceptors.request.use((config) => {
  const ck = Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
  return {
    ...config,
    Authorization: ck ? `Bearer ${ck}` : ''
  }
})

export { axios }
