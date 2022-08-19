import { Link, useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()

    const linkStyles = {
        color: 'pink',
        padding: '20px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '16px'
    }

    
    return ( 
        <div className="home-page">
            <div className="link">
                <Link to={'/'} style={linkStyles}>Back to Start</Link>
                <p>or</p>
                <h4>Choose your level below</h4>
            </div>
            
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