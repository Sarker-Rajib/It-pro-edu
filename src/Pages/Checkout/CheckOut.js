import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
   const course = useLoaderData();
   const { image_url, title, description, course_fee } = course;
   return (
      <div className="container pt-3">
         <div className="course-card shadow rounded border border-rounded p-3">
            <Row>
               <Col md={6}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <h5>Course fee : {course_fee} only</h5>
               </Col>
               <Col md={6}>
                  <Image src={image_url} alt={title} className="img-fluid w-100 pb-3" />
               </Col>
            </Row>
            <div className="text-center">
               <Button className="px-5">Checkout</Button>
            </div>
         </div>
      </div>
   );
};

export default CheckOut;