import { useEffect, useState } from "react";

const KanjiListFive = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-5')
        .then(res => res.json())
        .then(data => setData(data))
        }, [])
    return ( 
        <div className="kanji-list-five">
            <p>{ data }</p>
        </div>
     );
}
 
export default KanjiListFive;