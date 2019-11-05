import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage></ProductListPage>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/edit/:id',
        exact: false,
        main: ({ match }) => <ProductActionPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }

];

export default routes;