import { Navigate, useRoutes } from 'react-router-dom'; 
import UserPage from '../../../pages/UserPage';
import Page404 from '../../../pages/Page404'; 
import SvgColor from '../../../components/svg-color'; 
import FormPage from '../../../pages/FormPage';

//----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Users',
    path: 'users',
    icon: icon('ic_user'),
    element: <UserPage
    title={'Users'}
    model="res.partner"
    key={"res.partner"}
    />,
  },
  {
    title: 'Products',
    path: 'product',
    icon: icon('ic_cart'),
    element: <UserPage
    title={'Products'}
    model="product.template"
    key={"product.template"}
    />,
  },
    {
    title: 'Projects',
    path: 'project',
    icon: icon('ic_cart'),
    element: <UserPage
    title={'Projects'}
    model="project.project"
    key={"project.project"}
    />,
  },
  {
    title: 'NEW Users',
    path: 'new/users',
    icon: icon('ic_user'),
    element: <FormPage
    title={'Users'}
    model="res.partner"
    key={"NEW_res.partner"}
    />,
  },
  {
    title: 'NEW Products',
    path: 'new/product',
    icon: icon('ic_cart'),
    element: <FormPage
    title={'Products'}
    model="product.template"
    key={"NEW_product.template"}
    />,
  },
    {
    title: 'NEW Projects',
    path: 'new/project',
    icon: icon('ic_cart'),
    element: <FormPage
    title={'Projects'}
    model="project.project"
    key={"NEW_project.project"}
    />,
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
