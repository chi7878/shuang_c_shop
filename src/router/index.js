import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import member_sign from '@/components/pages/member_sign'
import backstage_sign from '@/components/pages/backstage_sign'

import product from '@/components/pages/product'
import news from '@/components/pages/news'
import aboutus from '@/components/pages/about_us'
import productcontent from '@/components/pages/product_content'

import dashoard from '@/components/pages/Dashboard'
import dashboardcoupon from '@/components/pages/dashboard_coupon'
import dashboardorder from '@/components/pages/dashboard_order'


import checkorder from '@/components/pages/Checkout/footer_and_navbar'
import checkout from '@/components/pages/Checkout/check_order'
import checkoutbasic from '@/components/pages/Checkout/basic_order'
import checkoutpay from '@/components/pages/Checkout/pay_order'
import checkoutfinish from '@/components/pages/Checkout/finish_order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/member_sign',
      name: 'member_sign',
      component: member_sign
    },
    {
      path: '/backstage_sign',
      name: 'backstage_sign',
      component: backstage_sign
    },
    
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    
    {
      path: '/productcontent/:id',
      name: 'productcontent',
      component: productcontent
    },
    {
      path: '/dashoard',
      name: 'dashoard',
      component: dashoard,
      meta:{requiresAuth: true}
    },
    {
      path: '/dashboardcoupon',
      name: 'dashboardcoupon',
      component: dashboardcoupon,
      meta:{requiresAuth: true}
    },
    {
      path: '/dashboardorder',
      name: 'dashboardorder',
      component: dashboardorder,
      meta:{requiresAuth: true}
    },
    {
      path: '/checkorder',
      component: checkorder,
      children:[
        {
          path: '',
          name: 'checkout',
          component: checkout
        },
        {
          path: 'basic',
          name: 'checkoutbasic',
          component: checkoutbasic
        },
        {
          path: 'pay',
          name: 'checkoutpay',
          component: checkoutpay
        },
        {
          path: 'finish',
          name: 'checkoutfinish',
          component: checkoutfinish
        },
      ]
    }
  ]
})
