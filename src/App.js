import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booked from './component/Booked/Booked';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/booking/:id">
          <Booked/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
