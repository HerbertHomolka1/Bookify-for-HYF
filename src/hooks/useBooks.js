import { useEffect, useState } from "react";

function useBooks(page) {
    const [data, setData] = useState([]);
    useEffect(()=>{
      let URL = 'https://gutendex.com/books' ;
      if (page>1) {
        URL += `/?page=${page}`
      }
      console.log(URL)
      fetch(URL)
      .then((apiRes) => apiRes.json())
      .then((resJson) => setData(resJson.results))
      .catch( (err) => console.log(err));
  
    },[page])
  
    return data
  }

  export default useBooks;