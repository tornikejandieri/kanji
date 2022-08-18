
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GreetingMessage from "./GreetingMessage";

import Home from "./Home";
import KanjiListFive from "./KanjiListFive";
import KanjiListFour from "./KanjiListFour";
import KanjiListOne from "./KanjiListOne";
import KanjiListSix from "./KanjiListSix";
import KanjiListThree from "./KanjiListThree";
import KanjiListTwo from "./KanjiListTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GreetingMessage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/firstgrade">
            <KanjiListOne />
          </Route>
          <Route path="/secondgrade">
            <KanjiListTwo />
          </Route>
          <Route path="/thirdgrade">
            <KanjiListThree />
          </Route>
          <Route path="/fourthgrade">
            <KanjiListFour />
          </Route>
          <Route path="/gradefive">
            <KanjiListFive />
          </Route>
          <Route exact path="/sixthgrade">
            <KanjiListSix />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
