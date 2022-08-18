import { Link } from "react-router-dom";

const GreetingMessage = () => {
    const linkStyle = {
        margin: '1rem',
        textDecoration: 'none',
        color: '#237699'
    }
    
    return ( 
    <div className="greeting-message">
        <h2>Welcome!</h2>
        <p>Press Start to learn</p>
        <Link to='/home' style={linkStyle}>Start</Link>
    </div>
     );
}
 
export default GreetingMessage;