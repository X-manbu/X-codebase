import Vue from 'vue'
import VueRouter from 'vue-router'
const Rule = () =>
  import ('../views/ruleForm/rule')
const CustomRule = () =>
  import ('../views/ruleForm/customRule')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Rule',
    component: Rule
  },
  {
    path: '/rule',
    name: 'Rule',
    component: Rule
  },
  {
    path: '/customRule',
    name: 'CustomRule',
    component: CustomRule
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router