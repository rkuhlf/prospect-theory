import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home';
import Examples from './Examples';
import Calculator from './Calculator';
import Explanation from './Explanation';
import TopNav from './TopNav';
import Footer from './Footer';
import MetaTags from 'react-meta-tags';
import './style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <TopNav />
          <Switch>
            <Route path="/examples">
              <MetaTags>
                <title>Examples of Prospect Theory Applied</title>
                <meta id="meta-description" name="description" content="Examples of prospect theory stretching from the first problems with utility theory and Allais all the way to modern decision making." />
                <meta id="og-title" property="og:title" content="MyApp" />
                <meta id="og-image" property="og:image" content="path/to/image.jpg" />
              </MetaTags>
              <Examples />
            </Route>
            <Route path="/explanation">
              <Explanation />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
