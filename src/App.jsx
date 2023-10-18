import { useEffect, useState } from "react";

import BookCard from "./components/BookCard";
import Navigation from "./components/Navigation";
import Flex from "./components/Flex";
import { useBooks } from "./hooks";

function App() {
  const [ReadBooks, setReadBooks] = useState(new Set([]));
  const [RadarBooks, setRadarBooks] = useState(new Set([]));
  const [mynavigation, setMynavigation] = useState("discover");
  const [page, setPage] = useState(1);

  let data = useBooks(page);
  
  const onRadarClick = (book) => {
    console.log(RadarBooks)
    const newRadarBooks = new Set(RadarBooks)
    const newReadBooks = new Set(ReadBooks)
    if (RadarBooks.has(book)) { 
      newRadarBooks.delete(book);
      newReadBooks.add(book)
    } else if (!ReadBooks.has(book)){
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
    <BookCard key={book.id} book={book} onRadarClick={onRadarClick} RadarBooks={RadarBooks} ReadBooks = {ReadBooks} />
  ));
  return (
    <>
      <Navigation mynavigation={mynavigation} setMynavigation={setMynavigation} page={page} setPage={setPage} />

      <div style={{ margin: "150px" }}>
        <Flex gap="30px"> {cards}</Flex>
      </div>
    </>
  );
}

export default App;
