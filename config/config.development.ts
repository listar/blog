import { defineConfig } from 'umi'

export default defineConfig({
  define: {
    "APIUrl": '',
    "SSOUrl": 'http://img.baipingheng.com',
    "TEST_MODE": true,
  },
  // proxy: {
  // 	"/api": {
  // 		"target": "http://business-flow-service.cde19b8e2c21340deb0f8dfefa46728a0.cn-shenzhen.alicontainer.com",
  // 		"changeOrigin": true,
  // 		"pathRewrite": { "^/api": "" },
  // 	},
  // },
})
