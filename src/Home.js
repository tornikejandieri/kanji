import { Link, useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()

    
    return ( 
        <div className="home-page">
            <button onClick={() => history.push('/firstgrade')}>Grade 1</button>
            <button onClick={() => history.push('/secondgrade')}>Grade 2</button>
            <button onClick={() => history.push('/thirdgrade')}>Grade 3</button>
            <button onClick={() => history.push('/fourthgrade')}>Grade 4</button>
            <button onClick={() => history.push('/gradefive')}>Grade 5</button>
            <button onClick={() => history.push('/sixthgrade')}>Grade 6</button>
        </div>
     );
}
 
export default Home;