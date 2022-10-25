import { createBrowserRouter } from 'react-router-dom';
import Error404 from '../../Pages/Error404/Error404';
import Main from '../../Layouts/Main/Main';

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <>home</>
         },
         {
            path: '/home',
            element: <>home</>
         },
         {
            path: '/courses',
            element: <>courses</>
         },
         {
            path: '/faq',
            element: <>FAQ</>
         },
         {
            path: '/blog',
            element: <>blog</>
         },
         {
            path: '/login',
            element: <>login</>
         },
         {
            path: '/register',
            element: <>register</>
         }
      ]
   },
   {
      path: '*',
      element: <Error404></Error404>
   }
]);