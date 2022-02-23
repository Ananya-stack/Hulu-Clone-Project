import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

    return (
        <div>
          {/* <HomeIcon/>   */}
          <Navbar bg="dark" variant="dark" className='navbars'>
                                    <Container>
                                        <Navbar.Brand href="/" ></Navbar.Brand>
                                        <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/home" className='navbrands active'><HomeIcon/></Nav.Link>
                                            <Nav.Link as={Link} to="/video" className='navbrands active'><OndemandVideoIcon/></Nav.Link>
                                            <Nav.Link as={Link} to="/search" className='navbrands active'><SearchIcon/></Nav.Link>
                                            <Nav.Link as={Link} to="/" className='navbrands active'><WhatshotIcon/></Nav.Link>
                                            <Nav.Link as={Link} to="/" className='navbrands active'><AccountCircleIcon/></Nav.Link>
                                            <Nav.Link as={Link} to="/" className='navbrands active'><LogoutIcon/></Nav.Link>
                                            
                                            {/* <div className='hulu-heading'><h3 >hulu</h3></div> */}
                                            {/* <Nav className="ml-auto hulu-brand">
                                            <Nav.Link as={Link} to="/log" className='navbrands-head'>hulu</Nav.Link>
                                            </Nav> */}  
                                        </Nav>

                                        <Nav className="mr-auto">
                                          <Nav.Link><img src='../img/hulu.webp' alt=''></img></Nav.Link>  
                                        <Nav.Link as={Link} to="/log" className='navbrands-head active'>hulu</Nav.Link>
                                        </Nav>
                                    </Container>
                                </Navbar>

        </div>
    );
}

export default Header;


