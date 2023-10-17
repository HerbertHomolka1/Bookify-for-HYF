import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function Navigation({ setNavigation, page, setPage }) {



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
                <Dropdown.Item onClick={() => setNavigation("discover")}>
                  Discover
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavigation("read")}>
                  Read
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setNavigation("on-radar")}>
                  On my radar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
            <Button variant="light" onClick={()=> page > 1 ? setPage(page-1) :  setPage(page) }>Previous Page</Button>
            <p style={{ fontSize: "45px" }}> {page} </p>
            <Button variant="light" onClick={()=> setPage(page+1)}>Next Page</Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
