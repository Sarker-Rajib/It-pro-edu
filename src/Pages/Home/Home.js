import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import banneer from '../../assets/Images/banneer.jpg';
import Course from '../../Components/Course/Course';
import './Home.css';


const Home = () => {
   const courses = useLoaderData();

   return (
      <>
         <div style={{ minHeight: '92vh' }} className="home d-flex align-items-center justify-content-center">
            <Container>
               <div className="wrapper p-3 m-3">
                  <Row className='align-items-center'>
                     <Col md={6}>
                        <h2>Welcome to Learning</h2>
                        <p>Information Technology (IT) plays a vital role in today's personal, commercial, and not-for-profit uses.</p> <br />
                        <p>The IT field offers people to work in computer programming, system analysis, testing, software and hardware development, web application design, etc. With the advancement of information technology, the education field has transformed its outlook and has adopted a modern way of teaching and learning.</p> <br />
                        <p>Continuous learning is important because it helps people to feel happier and more fulfilled in their lives and careers, and to maintain stronger cognitive functioning when they get older.</p>
                        <br />
                        <h5>Its Your Turn To Develop skills</h5>
                        <Link to='/courses' >
                           <Button variant='info' className="mb-2 mb-lg-0">Take a look Of Our courses</Button>
                        </Link>
                     </Col>
                     <Col md={6}>
                        <img src={banneer} alt={banneer} className="img-fluid" />
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>

         <Container className="pt-5">
            <h4 className="pb-3">Courses We Provide -</h4>
            <Row>
               <Col>
                  <Row className="gy-3">
                     {
                        courses.map(course => <Course
                           key={course.id}
                           course={course}
                        ></Course>)
                     }
                  </Row>
               </Col>
            </Row>

         </Container>
      </>
   );
};

export default Home;