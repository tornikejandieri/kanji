import { useEffect, useState } from "react";

const KanjiListThree = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-3')
        .then(res => res.json())
        .then(data => setData(data))
        })
    return ( 
        <div className="kanji-list-three">
            <p>{ data }</p>
        </div>
     );
}
 
export default KanjiListThree;