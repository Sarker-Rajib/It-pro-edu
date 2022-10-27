import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const CourseDetails = () => {
   const course = useLoaderData();
   const { image_url, title, description, id } = course;

   const options = {
      orientation: 'landscape',
   };

   return (
      <div className="container pt-3">
         <div className="course-card shadow rounded border border-rounded p-3">
            <div className="d-flex justify-content-between">
               <div>
                  <h6>Course Details :</h6>
               </div>
               <div>
                  <Pdf targetRef={ref} filename={`course_${title}`} options={options} x={.5} y={.5} scale={1.0}>
                     {({ toPdf }) => <Button className="custom-button" onClick={toPdf}>Download <FaFilePdf /></Button>}
                  </Pdf>
               </div>
            </div>
            <Row ref={ref}>
               <h4>Course Title : {title}</h4>
               <Col md={6}>
                  <p>{description}</p>
               </Col>
               <Col md={6}>
                  <Image src={image_url} alt={title} className="img-fluid w-100 pb-3" />
               </Col>
               <Link to={`/checkout/${id}`}><Button className="btn custom-button">Get Premium Access</Button></Link>
            </Row>
         </div>
      </div>
   );
};

export default CourseDetails;