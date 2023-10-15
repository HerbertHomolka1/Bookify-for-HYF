import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

function BookCard({book, onRadar, setOnRadar}) {
    const [mouseHover, setMouseHover] = useState(false)
   

    const baseStyle={width: '100%', textAlign: 'center',backgroundColor:'rgb(255,255,78)', opacity:'1'};
    const hoverStyle={...baseStyle, opacity:'0.4'}

    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {book.formats['image/jpeg']} />
      <Card.Body>
        <Card.Title> {book.title} </Card.Title>
        <Card.Text>
           {book.authors[0] ? book.authors[0].name : 'U.N. Owen'}

        </Card.Text>
      </Card.Body>
      <div onClick={() => setOnRadar(onRadar.add(book))  }>
      <Card.Footer style={mouseHover ? hoverStyle : baseStyle}  onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
        Put it on your radar
        </Card.Footer>
        </div>
    </Card>
  );
}

export default BookCard;






