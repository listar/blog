import { defineConfig } from 'umi'
import routes from './routes'
import proxy from './proxy'

const { UMI_ENV } = process.env

export default defineConfig({
  routes: routes.routes,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  esbuild: {},
  favicon: '/static/favicon.ico',
  headScripts: ['https://res.wx.qq.com/open/js/jweixin-1.2.0.js'],

  title: false,
  ignoreMomentLocale: true,
  proxy: proxy.dev,
  define: {
    APIUrl: "",
    // APIUrl: 'http://www.qqfav.com:10070',
    // APIUrl: 'http://localhost:10070',
  },
  manifest: {
    basePath: '/',
  },
})
