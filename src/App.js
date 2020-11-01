// import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Links from './components/Links';
import images from './components/images_data';
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const App = () => {

  const padding = {
    padding: 15,
    color: "white"
  }

  return (
    <Router>
      <div className="nav">
        <Link style={padding} to="/">AHONIITTY</Link>
        <Link style={padding} to="/links">Outer Orbit</Link>
      </div>

      <Switch>
        <Route path="/links">
        <Links />
        </Route>
        <Route path="/">
          <Home images={images} />
        </Route>
      </Switch>

      <div className="footer">
        <i>Susanna Maria M. (c) 2020</i>
      </div>
    </Router>
  )
}

export default App;
