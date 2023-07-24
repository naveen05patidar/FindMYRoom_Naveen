import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import myImage from '../Assets/images/Logo.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderCartFind } from '../ApiRouter';
import { useSelector } from 'react-redux';

function NavBar() {
  const [cartData, setCartData] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const userId = useSelector((state) => state.email);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(orderCartFind);
        const orderData = response.data.cartOrder;

        const cartOrder = [];

        for (let i = 0; i < orderData.length; i++) {
          if (orderData[i].userId === userId) {
            cartOrder.push(orderData[i]);
          }
        }
        setCartData(cartOrder);
        setCartCount(cartOrder.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div>
      {(localStorage.getItem('token')) ? <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="img-fluid w-25 h-25" alt='LOGO' src={myImage} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link className="np-Link" to='/dashboard'>Home</Link></Nav.Link>
              {/* <Nav.Link href="/uploadroom">Upload </Nav.Link> */}
              <Nav.Link><Link className="np-Link" to='/myorder'>Order</Link></Nav.Link>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link className="np-Link" to='/profile'>Profile</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  <Link className="np-Link">Logout</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/uploadroom">
                  <Link className="np-Link" to="/uploadroom">Upload Rooms</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link >
                <Link className="np-Link" to="/carts">Carts <sup style={{ color: "red", fontSize: "15px", fontWeight: "bolder" }}>{cartCount}</sup></Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> : <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="img-fluid w-25 h-25" alt='LOGO' src={myImage} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link><Link className='np-Link' to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link className='np-Link' to='/about'>About</Link></Nav.Link>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link className='np-Link' to='/signup'>Sign Up</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='np-Link' to='/login'>Login</Link></NavDropdown.Item>
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link ><Link className='np-Link' to='/contact'>Contact</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
    </div>
  );
}

export default NavBar;