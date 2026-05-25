import { lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home-page" */ '../pages/Home'));

const routes = [
    {
        path: '/',
        component: Home
    }
];

export default routes;
