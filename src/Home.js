import { Link, useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()

    const linkStyles = {
        color: '#f57373',
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
                <h4>Choose a grade below</h4>
            </div>
            
            <button onClick={() => history.push('/firstgrade')}>Grade 1
            <p>(beginner)</p></button>
            <button onClick={() => history.push('/secondgrade')}>Grade 2
            <p>(beginner)</p></button>
            <button onClick={() => history.push('/thirdgrade')}>Grade 3
            <p>(intermediate)</p></button>
            <button onClick={() => history.push('/fourthgrade')}>Grade 4
            <p>(intermediate)</p></button>
            <button onClick={() => history.push('/gradefive')}>Grade 5
            <p>(advanced)</p></button>
            <button onClick={() => history.push('/sixthgrade')}>Grade 6
            <p>(advanced)</p></button>
            
        </div>
     );
}
 
export default Home;