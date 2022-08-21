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
                <Link to={'/'} style={linkStyles}>(¯´•._.•Back to Start •._.•´¯)</Link>
                <p>or</p>
                <h4>Choose a level below</h4>
            </div>
            
            <button className="beginner" onClick={() => history.push('/firstgrade')}>Level 1
            <p>(beginner)</p></button>
            <button className="beginner" onClick={() => history.push('/secondgrade')}>Level 2
            <p>(beginner)</p></button>
            <button className="intermediate" onClick={() => history.push('/thirdgrade')}>Level 3
            <p>(intermediate)</p></button>
            <button className="intermediate" onClick={() => history.push('/fourthgrade')}>Level 4
            <p>(intermediate)</p></button>
            <button className="advanced" onClick={() => history.push('/gradefive')}>Level 5
            <p>(advanced)</p></button>
            <button className="advanced" onClick={() => history.push('/sixthgrade')}>Level 6
            <p>(advanced)</p></button>
            
        </div>
     );
}
 
export default Home;