import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
   const course = useLoaderData();
   const { image_url, title, description, id } = course;
   return (
      <div className="container pt-3">
         <div className="course-card shadow rounded border border-rounded p-3">
            <div className="d-flex justify-content-between">
               <div>
                  <h6>Course Details :</h6>
               </div>
               <div>
                  <Button variant="success">Download Pdf</Button>
               </div>
            </div>
            <Row>
               <h4>Course Title : {title}</h4>
               <Col md={6}>
                  <p>{description}</p>
               </Col>
               <Col md={6}>
                  <Image src={image_url} alt={title} className="img-fluid w-100 pb-3" />
               </Col>
               <Link to={`/checkout/${id}`}><Button>Get Premium Access</Button></Link>
            </Row>
         </div>
      </div>
   );
};

export default CourseDetails;