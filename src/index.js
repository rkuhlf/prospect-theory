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
// add support for og metadata tags
// use this https://www.heymeta.com/url/framer.com
// add enriched result faq (for explanation) https://developers.google.com/search/docs/data-types/faqpage
// add enriched result for text to speech https://developers.google.com/search/docs/data-types/speakable
// add enriched result searchbox https://developers.google.com/search/docs/data-types/sitelinks-searchbox
// figure out why it takes so long to load
// add favicon https://support.google.com/webmasters/answer/9290858?hl=en&ref_topic=9456381
// make mobile friendly

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
              </MetaTags>
              <Examples />
            </Route>
            <Route path="/explanation">
            <MetaTags>
              <title>Prospect Theory Explained</title>
              <meta id="meta-description" name="description" content="A detailed explanation of prospect theory's history, the biases it tries to account for, and the math behind it all." />
            </MetaTags>

              <Explanation />
            </Route> 
            <Route path="/calculator">
              <MetaTags>
                <title>Prospect Theory Calculator</title>
                <meta id="meta-description" name="description" content="A cutting edge calculator capable of determining weighted probabilities and values for any number of choices." />
              </MetaTags>
              <Calculator />
            </Route>
            <Route path="/">
              <MetaTags>
                <title>Prospect Theory</title>
                <meta id="meta-description" name="description" content="Your home for calculations, explanations, and examples explaining prospect theory." />
              </MetaTags>
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
