import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import navConfig from './layouts/dashboard/nav/config';
// ----------------------------------------------------------------------

export default function Router() {
  
  console.log(navConfig)
  const newRoutes = navConfig.map((item) => {
    console.log("item", item)
    return {
      path: item.path,
      element: item.element,
    }
  })
  console.log(newRoutes)
  const defaultRoutes = [
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        //{ path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ].concat(newRoutes),
    },
    

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]
  const routes = useRoutes(defaultRoutes);

  return routes;
}
