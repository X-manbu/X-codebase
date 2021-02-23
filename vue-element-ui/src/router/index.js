import Vue from "vue";
import VueRouter from "vue-router";
const Menu = () => import("@/components/menu/index");
const Rule = () => import("@/views/rule/rule");
const CustomRule = () => import("@/views/rule/customRule");
const Debugger = () => import("@/views/utils/debugger/index");
const Qs = () => import("@/views/utils/qs/index");
const Map = () => import("@/views/utils/map/index");
const Upload = () => import("@/views/utils/upload/index");
const Count = () => import("@/views/utils/count/index");
const Page = () => import("@/views/table/pagination");
const Route = () => import("@/views/route/index");
const Foo = () => import("@/views/route/other/foo");
const Bar = () => import("@/views/route/other/bar");
const User = () => import("@/views/route/user");
const Dashboard = () => import("@/views/layout/dashboard/index");
const Center = () => import("@/views/layout/center/index");
const Style = () => import("@/views/style/index");

Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: "/",
        redirect: { name: "Map" },
    },
    {
        path: "/rule",
        component: Menu,
        children: [
            {
                path: "rule",
                name: "Rule",
                component: Rule,
            },
            {
                path: "customRule",
                name: "CustomRule",
                component: CustomRule,
            },
        ],
    },
    {
        path: "/utils",
        component: Menu,
        children: [
            {
                path: "debugger",
                name: "Debugger",
                component: Debugger,
            },
            {
                path: "qs",
                name: "Qs",
                component: Qs,
            },
            {
                path: "map",
                name: "Map",
                component: Map,
            },
            {
                path: "upload",
                name: "Upload",
                component: Upload,
            },
            {
                path: "count",
                name: "Count",
                component: Count,
            },
        ],
    },
    {
        path: "/table",
        component: Menu,
        children: [
            {
                path: "paination",
                name: "Paination",
                component: Page,
            },
        ],
    },
    {
        path: "/route",
        component: Menu,
        children: [
            {
                path: "route",
                name: "Route",
                component: Route,
                children: [
                    {
                        path: "foo",
                        name: "Foo",
                        component: Foo,
                    },
                    {
                        path: "bar",
                        name: "Bar",
                        component: Bar,
                    },
                ],
            },
            {
                path: "user",
                name: "User",
                components: {
                    default: User,
                    main: User,
                },
            },
        ],
    },
    {
        path: "/layout",
        component: Menu,
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "center",
                name: "Center",
                component: Center,
            },
        ],
    },
    {
        path: "/style",
        component: Menu,
        children: [
            {
                path: "/style",
                name: "Style",
                component: Style,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
    // 设置滚动
    // scrollBehavior(to, from, savedPosition) {
    //     return {
    //         behavior: "smooth",
    //         x: 0,
    //         y: 600,
    //     };
    // },
});

router.beforeEach((to, from, next) => {
    // 未获取登录状态 默认未登录状态
    let isLogin = sessionStorage.getItem("isLogin") || false;
    // 如果已登录或者跳转登录页面，都允许进行下一步，否则跳转登录页面
    if (isLogin || to.name == "Route") {
        next();
    } else {
        next({ name: "Route" });
    }
});
export default router;
