import { Pagination } from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
const Rule = () =>
  import ('../views/ruleForm/rule')
const CustomRule = () =>
  import ('../views/ruleForm/customRule')
const Debugger = () =>
  import ('../views/utils/debugger/index')
const Qs = () =>
  import ('../views/utils/qs/index')
const Map = () =>
  import ('../views/utils/map/index')
const Upload = () =>
  import ('../views/utils/upload/index')
const Page = () =>
  import ('../views/table/pagination')
const Bar = () =>
  import ('../views/vueRoute/bar')
const Foo = () =>
  import ('../views/vueRoute/foo')
const Route = () =>
  import ('../views/vueRoute/route')

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
  },
  {
    path: '/qs',
    name: 'Qs',
    component: Qs
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/paination',
    name: 'Paination',
    component: Page
  },
  {
    path: '/route',
    name: 'Route',
    component: Route
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router