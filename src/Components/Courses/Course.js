import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Course = ({ course }) => {
   const { id, title, description, image_url } = course;
   // console.log(course);
   return (
      <Col lg={6}>
         <div className="course-card border rounded p-3">
            <img src={image_url} alt={title} className="img-fluid" />
            <h5>{title}</h5>
            <p>{description.length > 180 ? description.slice(0, 180) + ' ...' : description}</p>
            <a className="btn btn-primary">More</a>
         </div>
      </Col>
   );
};

export default Course;