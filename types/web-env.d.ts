declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  const url: string
  const ReactComponent: React.ComponentType
  export default url
  export { ReactComponent }
}

declare var __DEV__: boolean
declare var __DOMAIN__: string
declare var __HOST__: string
declare var __API_HOST__: string
declare var __STORAGE_HOST__: string
declare var __ADMIN_HOST__: string
