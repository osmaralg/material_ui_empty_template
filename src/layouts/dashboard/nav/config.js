import { Navigate, useRoutes } from 'react-router-dom'; 
import UserPage from '../../../pages/UserPage';
import Page404 from '../../../pages/Page404'; 
import SvgColor from '../../../components/svg-color'; 

//----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'user',
    path: 'user',
    icon: icon('ic_user'),
    element: <UserPage />,
  },

  {
    title: 'res.partner',
    path: 'res.partner',
    icon: icon('ic_user'),
    element: <UserPage />,
  },
  {
    title: 'product.template',
    path: 'product.template',
    icon: icon('ic_cart'),
    element: <UserPage />,
  },
  /**
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },

  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  }, 
    {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
   */
  


];

export default navConfig;
