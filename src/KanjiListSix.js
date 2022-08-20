import { useCallback, useState } from "react";

const KanjiListSix = () => {
    const [data, setData] = useState(null)

    const handleClick = () => {
        fetchRequest()
    }
    
    const fetchRequest = useCallback(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-6')
        .then(resp => resp.json()) 
        .then(data => setData(data[Math.floor(Math.random()*data.length)]))
    }, [handleClick])


    return ( 
        <div className="kanji-list-six">
            <p>{ data }</p>
            <button onClick={handleClick}>👀</button>
        </div>
     );
}
 
export default KanjiListSix;