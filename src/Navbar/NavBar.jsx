import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar&footer.css';



const Navigation = () => {
  return (
    <>
       <Navbar expand="lg" className="Navbar">
          <Navbar.Brand className='logo' href="/">Travelly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="brand">
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#benefits">Benefits</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </Navbar>
       
    </>
  );
}

export default Navigation