import React, { useContext } from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
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
                        <h3>User Profile</h3>

                        <Form.Group className="mb-3" controlId="A">
                           <Form.Label>Name</Form.Label>
                           <Form.Control type="text" placeholder={displayName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="B">
                           <Form.Label>photoURL</Form.Label>
                           <Form.Control type="text" placeholder={photoURL} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="C">
                           <Form.Label>User id</Form.Label>
                           <Form.Control type="text" placeholder={uid} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="D">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="text" placeholder={email ? email : <span className="text-warning">No email found</span>} disabled />
                        </Form.Group>

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