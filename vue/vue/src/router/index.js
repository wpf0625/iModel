import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/logreg/Reg'
import Login from '@/components/logreg/Login'
import Sreg from '@/components/logreg/Sreg'
import Mreg from '@/components/logreg/Mreg'
import Syreg from '@/components/logreg/Syreg'
import Sywork from '@/components/sywork/Sywork'
import Index from '@/components/index/Index'
import IndexUser from '@/components/index/IndexUser'
import Commend from '@/components/commend/Commend'
import EditZijian from '@/components/edit/EditZijian'
import EditNotice from '@/components/edit/EditNotice'
import EditPhoto from '@/components/edit/EditPhoto'
import Business from '@/components/business/Business'
import Camera from '@/components/camera/Camera'
import Search from '@/components/person/Search'
import UserLetter from '@/components/user/UserLetter'
import Photo from '@/components/photo/Photo'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/index/index-user',
      component:IndexUser
    },
    {
      path: '/sj_reg/:id',
      component: Sreg
    },
    {
      path: '/mo_reg/:id',
      component: Mreg
    },
    {
      path: '/she_reg/:id',
      component: Syreg
    },

    {
      path: '/commend',
      component: Commend
    },
    {
      path: '/sywork',
      component: Sywork
    },
    {
      path: '/edit/EditZijian',
      component: EditZijian
    },
    {
      path: '/edit/EditNotice',
      component: EditNotice
    },
    {
      path: '/edit/EditPhoto',
      component: EditPhoto
    },
    {
      path: '/business',
      component: Business
    },
    {
      path: '/camera',
      component: Camera

    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/user/user-letter',
      component: UserLetter
    },
    {
      path: '/photo',
      component: Photo
    }
  ]
})
