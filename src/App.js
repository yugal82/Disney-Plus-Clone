import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' >
            <Login />
          </Route>
          <Route exact path = '/home'>
            <Home  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
