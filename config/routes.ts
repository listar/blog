import { defineConfig } from 'umi'

export default defineConfig({
  routes: [

    {
      path: '/',
      component: '@/layouts/IndexLayout/index',
      routes: [
        { path: '/', component: '@/pages/index', exact: true, name: '首页' },
        { path: '/about', component: '@/pages/about', exact: true, name: '关于我' },
        { path: '/article', component: '@/pages/article', exact: true, name: '文章' },
        { path: '/article/:id', component: '@/pages/article/detail', exact: true, name: '详情' },

        { path: '/books', component: '@/pages/books', exact: true, name: '书籍' },
        { path: '/noun', component: '@/pages/noun', exact: true, name: '名词' },
        { path: '/hero', component: '@/pages/hero', exact: true, name: '人物传' },

        {
          component: './404',
        },
      ],
    },



    // {
    //   path: '/',
    //   component: '@/layouts/WXTopLayout',
    //   routes: [
    //     { path: '/', component: '@/pages/index', exact: true, name: '首页' },
    //     { path: '/pro/:uri', component: '@/pages/proDetail', exact: true, name: '详情' },
    //     { path: '/appointment', component: '@/pages/appointment', exact: true, name: '预约时间' },
    //     { path: '/pay', component: '@/pages/pay', exact: true, name: '支付' },

    //     { path: '/my', component: '@/pages/my/index', exact: true, name: '个人中心' },
    //     { path: '/my/order', component: '@/pages/my/order', exact: true, name: '个人中心' },

    //     { path: '/shootalert', component: '@/pages/article/shootAlert', exact: true, name: '拍摄需知' },
    //     { path: '/shopinfo', component: '@/pages/article/shopInfo', exact: true, name: '门店信息' },

    //     {
    //       component: './404',
    //     },
    //   ],
    // },

    {
      component: './404',
    },
  ],
})
