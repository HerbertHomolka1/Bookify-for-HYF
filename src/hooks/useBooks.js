import { useEffect, useState } from "react";

function useBooks() {
    const [data, setData] = useState([]);
    useEffect(()=>{
  
      fetch('https://gutendex.com/books')
      .then((apiRes) => apiRes.json())
      .then((resJson) => setData(resJson.results))
      .catch( (err) => console.log(err));
  
    },[])
  
    return data
  }

  export default useBooks;