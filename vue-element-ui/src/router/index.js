import Vue from 'vue'
import VueRouter from 'vue-router'
const Rule = () =>
  import ('../views/ruleForm/rule')
const CustomRule = () =>
  import ('../views/ruleForm/customRule')
const Debugger = () =>
  import ('../views/debugger/index')

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
  },
  {
    path: '/debugger',
    name: 'Debugger',
    component: Debugger
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router