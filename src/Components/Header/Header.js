import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webMaster from './../../assets/Images/webMaster.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
   const [theme, setTheme] = useState("light-theme");
   const[mode, setMode] = useState('Dark Mode');
   const toogleTheme = () => {
      if (theme === "light-theme") {
         setTheme("dark-theme");
         setMode("Light Mode");
      } else {
         setTheme("light-theme");
         setMode("Dark Mode");
      }
   }

   useEffect(() => {
      document.body.className = theme;
   }, [theme]);

   return (
      <header className="bg-nav">
         <Container >
            <Navbar className="d-flex align-items-center" collapseOnSelect expand="lg">

               <img
                  className="brand-image"
                  src={webMaster}
                  alt="First slide"
               />

               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                     <Button onClick={toogleTheme} className="p-0 px-2 me-2">{mode}</Button>
                     <Link to="/home">Home</Link>
                     <Link to="/courses">Courses</Link>
                     <Link to="/faq">FAQ</Link>
                     <Link to="/blog">Blog</Link>
                     {
                        // user?.email ? 
                        // <Image />
                        // :
                        <Link to="login">Login</Link>
                     }
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </Container>
      </header>
   );
};

export default Header;