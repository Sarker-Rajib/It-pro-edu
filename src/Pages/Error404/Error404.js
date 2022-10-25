import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
   return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-warning w-100">
         <div className="bg-info p-4 mx-2 rounded">
            <div className="shadow-lg border border-danger p-3 rounded text-center">
               <h1>404</h1>
               <h2>The Route/page You are Trying to access is not available</h2>
               <p>Back To <Link className="fs-5 text-success" to="/home">Home</Link> </p>
            </div>
         </div>
      </div>
   );
};

export default Error404;