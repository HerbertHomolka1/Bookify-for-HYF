import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function MyHeader({page, pageUp}) {
  return (
    <Navbar
      style={{ width: "100%", margin: "0 auto", height: "100px" }}
      fixed="top"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: "50px", margin: "50px" }}>
          Bookify For HYF 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Go to page 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Discover</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                <Dropdown.Item href="#/action-3">On my radar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
            <Button variant="light">Previous Page</Button>
             <p style={{fontSize:'45px'}}> {page} </p>  
            <Button variant="light" onClick={pageUp}>Next Page</Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
