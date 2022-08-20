import { useCallback, useState } from "react";

const KanjiListFour = () => {
    const [data, setData] = useState(null)

    const handleClick = () => {
        fetchRequest()
    }
    
    const fetchRequest = useCallback(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-4')
        .then(resp => resp.json()) 
        .then(data => setData(data[Math.floor(Math.random()*data.length)]))
    }, [handleClick])
  
    
    return ( 
        <div className="kanji-list-four">
            <p>{ data }</p>
            <button onClick={handleClick}>👀</button>
        </div>
     );
}
 
export default KanjiListFour;