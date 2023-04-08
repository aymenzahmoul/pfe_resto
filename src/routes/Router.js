import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Profil = Loadable(lazy(() => import('../views/Profils/Profil')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Produits   = Loadable(lazy(() => import('../views/utilities/Produits')))
const AddProduct   = Loadable(lazy(() => import('../views/utilities/AddProduct')))
const AddCouriers   = Loadable(lazy(() => import('../views/utilities/AddCouriers')))
const Orders   = Loadable(lazy(() => import('../views/utilities/Orders')))
const Stores   = Loadable(lazy(() => import('../views/utilities/Stores')))
const Couriers   = Loadable(lazy(() => import('../views/utilities/Couriers')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/profil', exact: true, element: <Profil /> },
     { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/produits', exact: true, element: <Produits /> },
      { path: '/addProduct', exact: true, element: <AddProduct /> },
      { path: '/addCouriers', exact: true, element: <AddCouriers /> },
      { path: '/orders', exact: true, element: <Orders /> },
      { path: '/stores', exact: true, element: <Stores /> },
      { path: '/couriers', exact: true, element: <Couriers /> },
     
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
