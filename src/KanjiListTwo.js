import { useEffect, useState } from "react";

const KanjiListTwo = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-2')
        .then(res => res.json())
        .then(data => setData(data))
    })

    return ( 
        <div className="kanji-list-two">
            <p>{ data }</p>
        </div>
     );
}
 
export default KanjiListTwo;