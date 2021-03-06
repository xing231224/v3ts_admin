/*
 * @Author: your name
 * @Date: 2022-02-16 12:40:17
 * @LastEditTime: 2022-04-18 16:10:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEc
 * @FilePath: \v3-ts_demo\src\router\index.ts
 */
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';
import routers from '@/store/routers';
import { getToken } from '@/utils/cookies';


const routes: Array<RouteRecordRaw> = [
    // 无鉴权的业务路由 ex:登录
    ...commonRoutes,
    // 带鉴权的业务路由
    ...asyncRoutes,
    // 异常页必须放在路由匹配规则的最后
    ...exceptionRoutes,
];

const router: Router = createRouter({
    // 新的vue-router4 使用 history路由模式 和 base前缀
    history: createWebHistory(import.meta.env.VITE_BASE),
    routes,
});
const whiteList = '/login' // 不重定向白名单
/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from, next) => {
    if (to.path == from.path) return
    if (!NProgress.isStarted()) {
        NProgress.start();
    }
    if (getToken()) { // 判断是否有token
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const myRouters = routers()
            if (myRouters.$state.addRouters.length == 0) {
                myRouters.GenerateRoutes().then(() => {
                    myRouters.getAddRouters.forEach(item => {
                        router.addRoute(item)
                    })
                })
                next()
            } else {
                next()
                NProgress.done();
            }

        }
    } else {
        // 是否在白名单内
        // eslint-disable-next-line no-lonely-if
        if (whiteList.indexOf(to.path) !== -1) {
            next()
            NProgress.done();
        } else {
            next({ path: "/login" })
        }

    }


    // 设置页面标题
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
