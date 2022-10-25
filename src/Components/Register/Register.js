import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';

const Register = () => {
   const { createUser } = useContext(AuthContext);
   const [accepted, setAccepted] = useState(true);
   const [error, setError] = useState('');

   const handleCheck = (e) => {
      setAccepted(!e.target.checked)
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;

      console.log(name, email, photoURL, password);
      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         })
   }

   return (
      <Container>
         <Row>
            <Col lg={6} className="m-auto">
               <div className="border card-bg mt-3 p-3 rounded">
                  <Form onSubmit={handleSubmit} className="w-100">
                     <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter full name" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicimage">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Enter photoURL" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleCheck} type="checkbox" label="Check to confirm" />
                     </Form.Group>
                     <Button variant="primary" type="submit" disabled={accepted}>
                        Register
                     </Button>
                  </Form>
                  <div className="mt-3">
                     <p>Already Have an Account ? <Link to="/login" className="text-info">Login Now</Link> </p>
                     <p className="text-danger">{error}</p>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
   );
};

export default Register;