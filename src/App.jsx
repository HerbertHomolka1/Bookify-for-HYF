import { useEffect, useState } from "react";

import BookCard from "./components/BookCard";
import Navigation from "./components/Navigation";
import Flex from "./components/Flex";
import { useBooks } from "./hooks";

function App() {
  // const [read, setRead] = useState(new Set([]));
  const [RadarBooks, setRadarBooks] = useState(new Set([]));
  const [navigation, setNavigation] = useState("discover");
  const [page, setPage] = useState(1);

  let data = useBooks(page);

  const onRadarClick = (book) => {
    setRadarBooks(RadarBooks.add(book));
    console.log("RadarBooks: ", RadarBooks);
  };

  if (navigation === "on-radar") {
    data = RadarBooks;
  }

  let cards;
  cards = Object.values(data).map((book) => (
    <BookCard key={book.id} book={book} onRadarClick={onRadarClick} />
  ));
  return (
    <>
      <Navigation setNavigation={setNavigation} page={page} setPage={setPage} />

      <div style={{ margin: "150px" }}>
        <Flex gap="30px"> {cards}</Flex>
      </div>
    </>
  );
}

export default App;
