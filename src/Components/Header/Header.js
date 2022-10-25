import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webMaster from './../../assets/Images/webMaster.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';

const Header = () => {
   const [theme, setTheme] = useState("light-theme");
   const [mode, setMode] = useState(true);
   const { user } = useContext(AuthContext);

   console.log(user);

   const toogleTheme = () => {
      if (theme === "light-theme") {
         setTheme("dark-theme");
         setMode(false);
      } else {
         setTheme("light-theme");
         setMode(true);
      }
   }

   useEffect(() => {
      document.body.className = theme;
   }, [theme]);


   return (
      <header className="bg-nav sticky-top">
         <Container >
            <Navbar className="d-flex align-items-center" collapseOnSelect expand="lg">

               <img
                  className="brand-image"
                  src={webMaster}
                  alt="First slide"
               />

               <Button onClick={toogleTheme} className="p-1 px-2 me-2 d-inline-block d-lg-none">
                  {
                     mode ? <FaMoon /> : <FaSun />
                  }
               </Button>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                     <Button onClick={toogleTheme} className="p-0 px-2 me-2 d-none d-lg-inline-block">
                        {
                           mode ? <FaMoon /> : <FaSun />
                        }
                     </Button>
                     <Link to="/home">Home</Link>
                     <Link to="/courses">Courses</Link>
                     <Link to="/faq">FAQ</Link>
                     <Link to="/blog">Blog</Link>
                     {
                        user?.email ? 
                        <span>{user?.email}</span>
                        // <Image src={user.photoURL}/>
                        :
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