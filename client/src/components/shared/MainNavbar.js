import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>

    <Navbar>
      <Container>
        <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/workers'>
              Workers
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/teamshome'>
              Team
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
)

export default MainNavbar;
