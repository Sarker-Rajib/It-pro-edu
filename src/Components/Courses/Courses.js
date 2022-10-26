import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
   const courses = useLoaderData();
   return (
      <Container className="pt-3">
         <h4>Courses We Provide -</h4>
         <Row>
            <Col lg={9}>
               <Row className="gy-3">
                  {
                     courses.map((course) => <Course
                        key={course.id}
                        course={course}
                     ></Course>)
                  }
               </Row>
            </Col>
            <Col lg={3}>
               <ol style={{listStyle: 'none'}}>
                  {
                     courses.map((course) => <li
                        key={course.id}
                     ><Link style={{ textDecoration: "none", fontSize: "16px", color: "#5c49ff" }} to={`/courses/${course.id}`}>{course.id}. {course.title}</Link></li>)
                  }
               </ol>
            </Col>
         </Row>

      </Container>
   );
};

export default Courses;