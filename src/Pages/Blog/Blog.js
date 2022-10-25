import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="pt-3">
            <Container>
                <div className="my-2 bg-nav p-3 rounded border border-info">
                    <h3 className='fs-4'>Q. What is `Cor's` ?</h3>
                    <p><span className='fs-5'># Answer : </span> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
                <div className="my-2 bg-nav p-3 rounded border border-info">
                    <h3 className='fs-4'>Q. Why are you using `Firebase` ? What other options do you have to implement authentication ?</h3>
                    <p><span className='fs-5'># Answer : </span> Firebase is basically a Google-backed app development platform which was initially developed by James Tamplin and Andrew Lee in 2011. The Firebase Realtime Database <strong>lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code</strong>. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p><br />
                    <p><span className='fs-5'>Other Options :</span> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className="my-2 bg-nav p-3 rounded border border-info">
                    <h3 className='fs-4'>Q. How does the private route work?</h3>
                    <p><span className='fs-5'># Answer : </span>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. </p>
                </div>
                <div className="my-2 bg-nav p-3 rounded border border-info">
                    <h3 className='fs-4'>Q. What is Node ? How does Node work ?</h3>
                    <p><span className='fs-5'># Node : </span>An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>

                    <p><span className='fs-5'># Node work step : </span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;