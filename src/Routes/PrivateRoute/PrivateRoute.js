import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';
import { Dna } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();

   if (loading) {
      const spinner = <Container className="text-center"><Dna
         visible={true}
         height="150"
         width="150"
         ariaLabel="dna-loading"
         wrapperStyle={{}}
         wrapperClass="dna-wrapper"
      />
      </Container>
      return spinner;
   }

   if (!user) {
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>
   }

   return children;
};

export default PrivateRoute;