import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Examples from './Examples';
import Calculator from './Calculator';
import Explanation from './Explanation';
import TopNav from './TopNav';
import Footer from './Footer';
import './style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <TopNav />
          <Route path="/" component={Home} exact/>
          <Route path="/examples" component={Examples} />
          <Route path="/explanation" component={Explanation} />
          <Route path="/calculator" component={Calculator} />
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
