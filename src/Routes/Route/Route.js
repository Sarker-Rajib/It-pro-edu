import { createBrowserRouter, Link } from 'react-router-dom';
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
      element: 
      <div className="d-flex align-items-center justify-content-center vh-100 bg-warning w-100">
         <div className="shadow border border-danger p-3 rounded bg-light text-center">
            <h1>404</h1>
            <h2>The Route/page You are Trying to access is not available</h2>
            <p>Back To <Link className="fs-5 text-info" to="/home">Home</Link> </p>
         </div>
      </div>
   }
]);