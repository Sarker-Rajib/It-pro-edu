import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';

const Profile = () => {
   const { user } = useContext(AuthContext)
   const { uid, displayName, photoURL, email } = user;
   // console.log(user);

   return (
      <div className="container pt-3">
         <div className="border p-3 rounded shadow">
            {user ?
               <>
                  <Row className="align-items-center">
                     <Col lg={6}>
                        <h3>User Profile Details</h3>
                        <p>User id : {uid}</p>
                        <h4>Name : {displayName}</h4>
                        <p>email: {email ? email : <span className="text-warning">No email</span>}</p>
                     </Col>

                     <Col lg={6}>
                        <Image src={photoURL} className="img-fluid" />
                     </Col>
                  </Row>

               </>
               : 'no user'
            }
         </div>
      </div>
   );
};

export default Profile;