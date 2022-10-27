import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webMaster from './../../assets/Images/webMaster.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/Authentication/AuthProvider';

const Header = () => {
   const [theme, setTheme] = useState("light-theme");
   const [mode, setMode] = useState(true);
   const { user, logOut } = useContext(AuthContext);

   // console.log(user);

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

               <button onClick={toogleTheme} className="d-inline-block d-lg-none toggle-button">
                  {
                     mode ? <FaMoon className="text-white"/> : <FaSun />
                  }
               </button>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border border-success" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                     <button onClick={toogleTheme} className="d-none d-lg-inline-block toggle-button">
                        {
                           mode ? <FaMoon className="text-white"/> : <FaSun />
                        }
                     </button>
                     <Link to="/home">Home</Link>
                     <Link to="/courses">Courses</Link>
                     <Link to="/faq">FAQ</Link>
                     <Link to="/blog">Blog</Link>
                     {
                        user?.photoURL ?
                           <>
                              <Link onClick={logOut} to="/home">Log-out</Link>

                              <Link to="/profile">
                                 <Image
                                    title={user?.displayName}
                                    src={user.photoURL} alt={user.displayName}
                                    className="square bg-primary rounded-circle"
                                    style={{ width: "35px", height: "35px", marginLeft: "5px" }}
                                 />
                              </Link>
                           </>
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