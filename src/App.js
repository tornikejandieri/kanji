
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GradeOne from "./GradeOne";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gradeone">
            <GradeOne />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
