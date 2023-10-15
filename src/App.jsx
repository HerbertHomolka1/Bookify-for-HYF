import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
// import MyHeader from "./components/MyHeader";
import BookCard from "./components/BookCard";

import Flex from "./components/Flex";
import { useBooks } from "./hooks";



function App() {
  
  // const [page, setPage] = useState(1);
  const [read, setRead] = useState(new Set([]));
  const [onRadar, setOnRadar] = useState(new Set([]))
  const [readOrOnRadar, setReadOrOnRadar] = useState('discover')
  
 

  let data = useBooks();
  
  // const [cards, setCards] = useState([]);
 
 
     
      // let mycards;
    if (readOrOnRadar === 'on-radar') {
       
      data = onRadar;
       
     
      } 

      let cards;
      cards = Object.values(data).map((book) => <BookCard book = {book} onRadar={onRadar} setOnRadar={setOnRadar}/>)
  return (
  <>
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
            style={ { maxHeight: "100px" }}
            navbarScroll
          >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Go to page 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>setReadOrOnRadar('discover')}>Discover</Dropdown.Item>
                <Dropdown.Item onClick={
                  ()=>setReadOrOnRadar('read')
                
              }>Read</Dropdown.Item>
                <Dropdown.Item onClick={()=>setReadOrOnRadar('on-radar')}>On my radar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
            <Button variant="light">Previous Page</Button>
             <p style={{fontSize:'45px'}}>  </p>  
            <Button variant="light">Next Page</Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <div style={{margin:'150px'}}>
    <Flex gap = '30px' > {cards}</Flex>
    </div>
    
    </>
  
  );
}

export default App;