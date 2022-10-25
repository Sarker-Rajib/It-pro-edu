import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
   return (
      <Container>
         <Row>
            <Col lg={6} className="m-auto">
               <div className="border card-bg mt-3 p-3 rounded">
                  <Form className="w-100">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check to confirm" />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Login
                     </Button>
                  </Form>
                  <div className="mt-3">
                     <div className="row gy-2">
                        <div className="col-lg-6">
                           <Button className="w-100" variant="primary" type="submit">
                              <FaGoogle className='text-warning' /> Google Login
                           </Button>
                        </div>
                        <div className="col-lg-6">
                           <Button className="w-100" variant="primary" type="submit">
                              <FaGithub /> github Login
                           </Button>
                        </div>
                     </div>
                     <br />
                  </div>
                  <div className="mt-3">
                     <p>New in this site ? <Link to="/register" className="text-info">Register Now</Link> </p>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
   );
};

export default Login;