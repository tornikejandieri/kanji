import KanjiList from "./KanjiList";
import useFetch from "./useFetch";

const GradeOne = () => {
    const { data: kanji } = useFetch('https://kanjiapi.dev/v1/kanji/grade-1')
    return ( 
        <div className="grade-one">
            
            {data && <KanjiList kanji={kanji} />}
        </div>
     );
}
 
export default GradeOne;