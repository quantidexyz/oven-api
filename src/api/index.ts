import { client } from './build/client.gen'

const setConfig = client.setConfig

setConfig({
  baseUrl: 'https://www.breadcrumb.cash/api',
})

export { client }
export * from './build'
