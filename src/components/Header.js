import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function Header () {
  const navigate = useNavigate ();
  let user = JSON.parse(localStorage.getItem('user-info'));
  function logOut() {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Colbr API</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
            {
              localStorage.getItem('user-info') ?
              <>
              </>
              :
              <>
                <Link to="/register">Register </Link>
                <Link to="/login">Login </Link>
              </>
            }
          </Nav>
          {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={ user.firstname }>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav> 
          : null}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
