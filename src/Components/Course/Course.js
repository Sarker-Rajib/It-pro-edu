import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
   const { id, title, description, image_url } = course;
   // console.log(course);
   return (
      <Col lg={4} md={6}>
         <div className="course-card border rounded p-3">
            <img src={image_url} alt={title} className="img-fluid" />
            <h5 className="pt-3">{title}</h5>
            <p>{description.length > 100 ? description.slice(0, 100) + ' ...' : description}</p>
            <Link to={`/courses/${id}`}>
               <Button className="btn btn-primary">More About this course</Button>
            </Link>
         </div>
      </Col >
   );
};

export default Course;