import { useEffect, useState } from "react";

const KanjiListSix = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-6')
        .then(res => res.json())
        .then(data => setData(data))
        })
    return ( 
        <div className="kanji-list-sic">
            <p>{ data }</p>
        </div>
     );
}
 
export default KanjiListSix;