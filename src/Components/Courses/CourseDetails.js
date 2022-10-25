import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
   const course = useLoaderData();
   const { image_url, title, description } = course;
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
            <h4>{title}</h4>
            <p>{description}</p>
            <Image src={image_url} alt={title} className="img-fluid w-100 pb-3"/>
            <Link to='/checkout'><Button>Get Premium Access</Button></Link>
         </div>
      </div>
   );
};

export default CourseDetails;