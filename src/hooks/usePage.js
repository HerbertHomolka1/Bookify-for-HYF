import { useEffect, useState } from "react";

function usePage() {
    const [data, setData] = useState({});
    useEffect(()=>{
  
      fetch('https://gutendex.com/books/?page=2')
      .then((apiRes) => apiRes.json())
      .then((resJson) => setData(resJson.results))
      .catch( (err) => console.log(err));
  
    },[page])
  
    return data
  }

  export default usePage;