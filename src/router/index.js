import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaIni',
    component: () => import('../views/TelaInicial.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cadastro',
    component: () => import('../views/Cadastro.vue')
  },
  {
    path: '/home',
    name:'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/detail/:book',
    component: () => import('../views/BookDetail.vue')
  },
  {
    path: '/carrinho',
    component: () => import('../views/Carrinho.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
  if (to.name === 'Home') {
    localStorage.getItem('token') ? next() : next('/')
  }
  if (to.name === 'TelaIni') {
    if (localStorage.getItem('token')) {
      next('/home')
    }
  }

  next()
})

export default router
