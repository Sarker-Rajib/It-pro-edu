import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';

const Login = () => {
   const [accepted, setAccepted] = useState(true);
   const [error, setError] = useState('');
   const { login , setLoading} = useContext(AuthContext);

   const handleCheck = (e) => {
      setAccepted(!e.target.checked)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         })
         .finally(() => {
            setLoading(false);
         })
   }

   return (
      <Container>
         <Row>
            <Col lg={6} className="m-auto">
               <div className="border card-bg mt-3 p-3 rounded">
                  <Form className="w-100" onSubmit={handleSubmit}>
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
                           <Button className="w-100" variant="primary" type="submit" >
                              <FaGithub /> github Login
                           </Button>
                        </div>
                     </div>
                     <br />
                  </div>
                  <div className="mt-3">
                     <p>New in this site ? <Link to="/register" className="text-info">Register Now</Link> </p>
                     <p className="text-danger">{error}</p>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
   );
};

export default Login;