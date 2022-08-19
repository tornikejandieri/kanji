import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const KanjiListOne = () => {
    const [data, setData] = useState(null)
    const history = useHistory()


   useEffect(() => {
    fetch('https://kanjiapi.dev/v1/kanji/grade-1')
    .then(res => res.json())
    .then(data => setData(data))
    })

    
    return ( 
        <div className="kanji-list-one">
            <p>{ data }</p>
              
        </div>
     );
}
 
export default KanjiListOne;