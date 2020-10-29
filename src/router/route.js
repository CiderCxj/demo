const routes = [
    {
        path: '/demo',
        name: 'demo',
        component: resolve => require(['@/components/demo'], resolve), 
        meta: {},
        children:[
            {
                path:'test',
                name:'test',
                component: resolve => require(['@/components/test'],resolve)
            }
        ]
    },
    {
        path: '/',
        name: 'HelloWord',
        component: resolve => require(['@/components/hello-word'], resolve),
        meta: {}
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: resolve => require(['@/pages/vuex'], resolve),
        meta: {}
    },
    {
        path: '/spread',
        name: 'spread',
        component: resolve => require(['@/pages/spread'], resolve),
        meta: {}
    },
    {
        path: '/jquery',
        name: 'jquery',
        component: resolve => require(['@/pages/jquery'], resolve),
        meta: {}
    }
];

export default routes;