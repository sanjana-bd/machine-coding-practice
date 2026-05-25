import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: () => lazy(() => import(/* webpackChunkName: "home-page" */ '../pages/Home')),
    }
];

export default routes;
