// import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Imagegallery from './components/Imagegallery';
import Light from './components/Lightbox';
import Links from './components/Links';
import images from './components/images_data';
import gallery from './components/gallery_data';
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div className="navbar">
        <Link style={padding} to="/">AHONIITTY</Link>
        <Link style={padding} to="/gallery">Images</Link>
        <Link style={padding} to="/links">Other</Link>
      </div>

      <Switch>
        <Route path="/gallery">
        {/* <Imagegallery gallery={gallery} /> */}
        </Route>
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
