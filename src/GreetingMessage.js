import {  useHistory } from "react-router-dom";

const GreetingMessage = () => {


    const history = useHistory()

    
    return ( 
    <div className="greeting-message">
        <h2>🌸Welcome🌸</h2>
        <p>(っ◔◡◔)っPress Start To Begin</p>
       
        <button onClick={() => history.push('/home')}>Start</button>
    </div>
     );
}
 
export default GreetingMessage;