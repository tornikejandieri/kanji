import { useEffect, useState } from "react";

const KanjiListFour = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-4')
        .then(res => res.json())
        .then(data => setData(data))
        })
    return ( 
        <div className="kanji-list-four">
            <p>{ data }</p>
        </div>
     );
}
 
export default KanjiListFour;