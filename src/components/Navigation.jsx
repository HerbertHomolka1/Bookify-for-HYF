import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function Navigation({ mynavigation, setMynavigation, page, setPage }) {
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
             current : {mynavigation}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                { mynavigation === 'discover' ? '' :  <Dropdown.Item onClick={() => setMynavigation("discover")}>
                  Discover
                </Dropdown.Item>}
                {mynavigation === 'on-radar' ?  '' : <Dropdown.Item onClick={() => setMynavigation("on-radar")}>
                  On my radar
                </Dropdown.Item>}
                { mynavigation === 'read' ? '' : <Dropdown.Item onClick={() => setMynavigation("read")}>
                  Read
                </Dropdown.Item>}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
            <Button
              variant="light"
              onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}
            >
              Previous Page
            </Button>
            <p style={{ fontSize: "45px" }}> {page} </p>
            <Button variant="light" onClick={() => setPage(page + 1)}>
              Next Page
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
