import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function BookCard({ book, onRadarClick, onReadClick, RadarBooks, ReadBooks }) {
  const [mouse1Hover, setMouse1Hover] = useState(false);
  const [mouse2Hover, setMouse2Hover] = useState(false);

  const cardColor = ReadBooks.has(book)
    ? "green"
    : RadarBooks.has(book)
    ? "blue"
    : "yellow";
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

      {ReadBooks.has(book) ? (
        ""
      ) : (
        <div onClick={() => onRadarClick(book)}>
          <Card.Footer
            style={mouse1Hover ? hoverStyle : baseStyle}
            onMouseEnter={() => setMouse1Hover(true)}
            onMouseLeave={() => setMouse1Hover(false)}
          >
            {RadarBooks.has(book)
              ? "Not interested anymore"
              : "Put it on your radar"}
          </Card.Footer>
        </div>
      )}
      {RadarBooks.has(book) || ReadBooks.has(book) ? (
        <div onClick={() => onReadClick(book)}>
          <Card.Footer
            style={mouse2Hover ? hoverStyle : baseStyle}
            onMouseEnter={() => setMouse2Hover(true)}
            onMouseLeave={() => setMouse2Hover(false)}
          >
            {ReadBooks.has(book)
              ? "You read this book, click here to unread"
              : "Put it on your read"}
          </Card.Footer>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
}

export default BookCard;
