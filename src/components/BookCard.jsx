import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function BookCard({ book, onRadarClick, RadarBooks, ReadBooks }) {
  const [mouseHover, setMouseHover] = useState(false);
 
  const cardColor = ReadBooks.has(book) ?  "green": (RadarBooks.has(book) ? 'blue': 'yellow');
  const baseStyle = {
    width: "100%",
    textAlign: "center",
    backgroundColor: cardColor,
    opacity: "1",
  };
  const hoverStyle = { ...baseStyle, opacity: "0.4" };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.formats["image/jpeg"]} />
      <Card.Body>
        <Card.Title> {book.title} </Card.Title>
        <Card.Text>
          {book.authors[0] ? book.authors[0].name : "U.N. Owen"}
        </Card.Text>
      </Card.Body>
  
    <div onClick={() => onRadarClick(book)}>
        <Card.Footer
          style={mouseHover ? hoverStyle : baseStyle}
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
           {ReadBooks.has(book) ? 'You read this book' : (RadarBooks.has(book) ? 'Put it on your read': 'Put it on your radar')}
        </Card.Footer>
      </div>
    </Card>
  );
}

export default BookCard;
