import { lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home-page" */ '../pages/Home'));

const Table = lazy(() => import(/* webpackChunkName: "table-page" */ '../pages/Table'));

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/table',
        component: Table
    }
];

export default routes;
