import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    return ( 
        useEffect(() => {
            fetch(url)
            .then(res => {
               return res.json()
                
            })
            .then(data => {
                setData(data)
            })
        })
     );
    return {data}
}
 
export default useFetch;