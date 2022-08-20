import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

const KanjiListOne = () => {
    const [data, setData] = useState(null)
    const history = useHistory()


//    useEffect(() => {
//     fetch('https://kanjiapi.dev/v1/kanji/grade-1')
//     .then(res => res.json())
//     .then(data => setData(data))
//     }, [])


    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/grade-1')
        .then(resp => {
            const { data } = resp

            const randomKanji = data[Math.floor(Math.random()*data.length)]
            setData(randomKanji)   
        }) 
    }, [])
    
    
    

    
    return ( 
        <div className="kanji-list-one">
            <p>{ data }</p>
              
        </div>
     );
}
 
export default KanjiListOne;