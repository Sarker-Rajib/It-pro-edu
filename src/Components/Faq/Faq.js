import React from 'react';
import { Container } from 'react-bootstrap';

const Faq = () => {
   return (
      <div className="pt-3">
         <Container>
            <div className="my-2 bg-nav p-3 rounded border border-info">
               <h3 className='fs-4'>Q. What is `Cor's` ?</h3>
               <p><span className='fs-5'># Answer : </span> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            </div>
         </Container>
      </div>
   );
};

export default Faq;