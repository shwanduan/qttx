import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
    children:[
      {path:'profile',
       name:'profile',
       component:()=>import ('../views/About/profile.vue')
      },
      {
        path:'development',
        name:'development',
        component:()=>import ('../views/About/development.vue')
      },
      {
        path:'culture',
        name:'culture',
        component:()=>import ('../views/About/culture.vue')
      },
      {
        path:'filiale',
        name:'filiale',
        component:()=>import ('../views/About/filiale.vue')
      },
      {
        path:'recruitment',
        name:'recruitment',
        component:()=>import ('../views/About/recruitment.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')

  },
  {
    path: '/technical',
    name: 'Technical',
    component: () => import('../views/Technical.vue')
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('../views/Serve.vue'),
    meta: { activeMenu: '/serve' }
  },
  {
    // path:'/serveDetails',
    // name:'serveDetails',
    // component:()=>  import ('../views/sevreDetails.vue')
    path:'/serveDetails',
    name:'serveDetails',
    component:()=> import ('../views/severDetails.vue'),
    meta: { activeMenu: '/serve' }
    
  },
  // {
  //   path: '/serve/:id',
  //   name: 'Serve',
  //   component: () => import('../views/Serve.vue')
  // },
  {
    path: '/project',
    name: 'Project',
    redirect: '/project/index',
    component: () => import('../views/Project/index.vue'),
    children: [
      {
        path:'index',
        name:'ProjectIndex',
        component:()=> import ('../views/Project'),
        meta: { activeMenu: '/project' }
      },
      {
        path:'prodetail',
        name:'projectDetail',
        component:()=> import ('../views/projectDetails.vue'),
        meta: { activeMenu: '/project' }
      },
    ]
  },
  {
    path:'/industry',
    name:'Industry',
    component:()=> import ('../views/Industry.vue'),
  },
  {
    path:'/contact',
    name:'Contact',
    component:()=>import ('../views/Contact.vue')
  },
  {
    path:'/employee',
    name:'Employee',
    component:()=> import ('../views/Employee.vue')
  },
  {
    path:'/swiperdetail',
    name:'Swiperdetail',
    component:()=>import ('../views/Home/Swiper_detail.vue')
  },
  {
    path:'/expersiceDetail/:id',
    name:'ExpersiceDetail',
    component:()=> import ('../views/Home/expersiceDetail.vue')
  },

  {
    path:'/industryDetails',
    name:'industryDetails',
    component:()=>import ('../views/industryDetails'),
    meta: { activeMenu: '/industry' }
  },
  {
    path:'/activeDetails',
    name:'activeDetails',
    component:()=>import ('../views/activeDetails')
  },{
    path:'/gopayforman',
    name:'gopayforman',
    component:()=> import ('../views/gopayforman')
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
