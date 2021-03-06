import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router >
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
