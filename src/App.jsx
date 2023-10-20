import { useEffect, useState } from "react";

import BookCard from "./components/BookCard";
import Navigation from "./components/Navigation";
import Flex from "./components/Flex";
import { useBooks } from "./hooks";
import Alert from 'react-bootstrap/Alert';

function App() {
  const [ReadBooks, setReadBooks] = useState(new Set([]));
  const [RadarBooks, setRadarBooks] = useState(new Set([]));
  const [mynavigation, setMynavigation] = useState("discover");
  const [page, setPage] = useState(1);
  // const [alert, setAlert] = useState(0);

  let data = [];
  for (let book of useBooks(page)) {
    if (!ReadBooks.has(book) && !RadarBooks.has(book) ) data.push(book);
  }

  const onRadarClick = (book) => {
   
    const newRadarBooks = new Set(RadarBooks);
    if (!RadarBooks.has(book)) {
      newRadarBooks.add(book);
    } else {
      newRadarBooks.delete(book);
    }

    setRadarBooks(newRadarBooks);
  };

  const onReadClick = (book) => {
    const newRadarBooks = new Set(RadarBooks);
    const newReadBooks = new Set(ReadBooks);
    if (!ReadBooks.has(book) && RadarBooks.has(book) ) {
      newReadBooks.add(book);
      newRadarBooks.delete(book);
      

    } else {
      newReadBooks.delete(book);
      newRadarBooks.add(book);
    }
    setRadarBooks(newRadarBooks);
    setReadBooks(newReadBooks);
  };

  

  if (mynavigation === "on-radar") {
    data = [...RadarBooks];
  } else if (mynavigation === "read") {
    data = [...ReadBooks];
  }

  let cards;
  cards = Object.values(data).map((book) => (
    <BookCard
      key={book.id}
      book={book}
      onRadarClick={onRadarClick}
      onReadClick={onReadClick}
      RadarBooks={RadarBooks}
      ReadBooks={ReadBooks}
    />
  ));
  return (
    <>
      <Navigation
        mynavigation={mynavigation}
        setMynavigation={setMynavigation}
        page={page}
        setPage={setPage}
      />
      {/* <Alert style={{ width: '100%', position: 'fixed', top: '100px', marginBottom:'100px', zIndex: '9999' }}>
          This is a  alert—check it out!
        </Alert> */}
      <div style={{ margin: "125px" }}>
        <Flex gap="30px"> {cards}</Flex>
      </div>
    </>
  );
}

export default App;
