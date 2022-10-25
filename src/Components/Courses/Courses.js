import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
   const courses = useLoaderData();
   return (
      <Container className="pt-3">
         <h4>Courses We Provide -</h4>
         <Row>
            <Col lg={8}>
               <Row className="gy-3">
                  {
                     courses.map((course) => <Course
                        key={course.id}
                        course={course}
                     ></Course>)
                  }
               </Row>
            </Col>
            <Col lg={4}>
               <h5>Description</h5>
            </Col>
         </Row>

      </Container>
   );
};

export default Courses;