import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navigation({
  mynavigation,
  setMynavigation,
  page,
  setPage,
  setBookSort,
}) {
  const getPageList = (page) => {
    let pageList = [];
    for (let i = page - 3; i <= page + 3; i++) {
      if (i != page && i > 0) {
        pageList.push(i);
      }
    }
    return pageList;
  };

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
                {mynavigation === "discover" ? (
                  ""
                ) : (
                  <Dropdown.Item onClick={() => setMynavigation("discover")}>
                    Discover
                  </Dropdown.Item>
                )}
                {mynavigation === "on-radar" ? (
                  ""
                ) : (
                  <Dropdown.Item onClick={() => setMynavigation("on-radar")}>
                    On my radar
                  </Dropdown.Item>
                )}
                {mynavigation === "read" ? (
                  ""
                ) : (
                  <Dropdown.Item onClick={() => setMynavigation("read")}>
                    Read
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {mynavigation === "discover" ? (
            <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
              <Button
                variant="light"
                onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}
              >
                Previous Page
              </Button>
              <div style={{ fontSize: "45px" }}>
                <DropdownButton variant="light" title={page}>
                  {getPageList(page).map((i) => (
                    <Dropdown.Item key={i} onClick={() => setPage(i)}>
                      {i}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <Button variant="light" onClick={() => setPage(page + 1)}>
                Next Page
              </Button>
            </ButtonGroup>
          ) : (
            ""
          )}
          {mynavigation === "on-radar" || mynavigation === "read"? (
            <DropdownButton
              style={{ margin: "50px" }}
              variant="light"
              title="sort by"
            >
              <Dropdown.Item onClick={() => setBookSort("id")}>
                sort by id
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBookSort("title")}>
                sort by title
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
