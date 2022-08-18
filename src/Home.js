import { Link, useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()
    const handleClickOne = () => {
        history.push('/gradeone')
    }
    
    return ( 
        <div className="home-page">
            <button onClick={handleClickOne}>Grade 1</button>
            <button>Grade 2</button>
            <button>Grade 3</button>
            <button>Grade 4</button>
            <button>Grade 5</button>
            <button>Grade 6</button>
        </div>
     );
}
 
export default Home;