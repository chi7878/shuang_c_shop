import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import membersign from '@/components/pages/pageMemberSign'
import dashboardsign from '@/components/pages/pageDashboardSign'

import productcontent from '@/components/pages/productContent'
import allproducts from '@/components/pages/pageAllProducts'
import news from '@/components/pages/pageNews'
import aboutus from '@/components/pages/pageAboutUs'
import returnpackage from '@/components/pages/pageReturnPackage'
import shopping from '@/components/pages/pageShopping'
import faq from '@/components/pages/pageFaq'
import contactmethod from '@/components/pages/pageContactMethod'

import dashoard from '@/components/dashboard/dashboardProducts'
import dashboardcoupon from '@/components/dashboard/dashboardCoupon'
import dashboardorder from '@/components/dashboard/dashboardOrder'


import checkorder from '@/components/Checkout/checkOrder'
import checkout from '@/components/Checkout/Checkout_template/order_check'
import checkoutbasic from '@/components/Checkout/Checkout_template/order_basic'
import checkoutpay from '@/components/Checkout/Checkout_template/order_pay'
import checkoutfinish from '@/components/Checkout/Checkout_template/order_finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/'
    },
    {
      path:'/',
      name:'index',
      component: index,
    },
    {
      path:'/allproducts',
      name:'allproducts',
      component: allproducts,
      query:{
        class:" ",
      },
    },
    {
      path:'/membersign',
      name:'membersign',
      component: membersign
    },
    {
      path:'/dashboardsign',
      name:'dashboardsign',
      component:dashboardsign
    },
    
    {
      path:'/news',
      name:'news',
      component: news
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: aboutus
    },
    
    {
      path:'/productcontent/:id',
      name:'productcontent',
      component: productcontent
    },
    {
      path:'/dashoard',
      name:'dashoard',
      component: dashoard,
      meta:{requiresAuth: true},
      beforeEnter (to, from, next) {
        if (document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') === '') {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path:'/dashboardcoupon',
      name:'dashboardcoupon',
      component: dashboardcoupon,
      meta:{requiresAuth: true},
      beforeEnter (to, from, next) {
        if (document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') === '') {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path:'/dashboardorder',
      name:'dashboardorder',
      component: dashboardorder,
      meta:{requiresAuth: true},
      beforeEnter (to, from, next) {
        if (document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') === '') {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path:'/checkorder',
      component: checkorder,
      children:[
        {
          path:'',
          name:'checkout',
          component: checkout
        },
        {
          path:'basic',
          name:'checkoutbasic',
          component: checkoutbasic
        },
        {
          path:'pay',
          name:'checkoutpay',
          component: checkoutpay
        },
        {
          path:'finish',
          name:'checkoutfinish',
          component: checkoutfinish
        },
      ]
    },
    {
      path:'/returnpackage',
      name:'returnpackage',
      component:returnpackage
    },
    {
      path:'/shopping',
      name:'shopping',
      component:shopping
    },
    {
      path:'/faq',
      name:'faq',
      component:faq
    },
    {
      path:'/contactmethod',
      name:'contactmethod',
      component:contactmethod
    },
  ]
})
