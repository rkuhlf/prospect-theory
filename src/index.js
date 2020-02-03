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
// add favicon https://support.google.com/webmasters/answer/9290858?hl=en&ref_topic=9456381
// make mobile friendly
// make sure to test reindexing before deciding it doesn't work

class App extends Component {
  render() {
    const exampleDescription = "Examples of prospect theory stretching from the first problems with utility theory and Allais all the way to modern decision making.";
    const explanationDescription = "A detailed explanation of prospect theory's history, the biases it tries to account for, and the math behind it all.";
    const calculatorDescription = "A cutting edge calculator capable of determining weighted probabilities and values for any number of choices.";
    const homeDescription = "Your home for calculations, explanations, and examples explaining prospect theory.";
    return (
      <Router>
        <div className="wrapper">
          <TopNav />
          <Switch>
            <Route path="/examples">
              <MetaTags>
                <title>Examples of Prospect Theory Applied</title>
                <meta id="meta-description" name="description" content={exampleDescription} />
              </MetaTags>
              <p className="d-none">{exampleDescription}</p>
              <Examples />
            </Route>
            <Route path="/explanation">
              <MetaTags>
                <title>Prospect Theory Explained</title>
                <meta id="meta-description" name="description" content={explanationDescription} />
              </MetaTags>
              <p className="d-none">{explanationDescription}</p>
              <Explanation />
            </Route> 
            <Route path="/calculator">
              <MetaTags>
                <title>Prospect Theory Calculator</title>
                <meta id="meta-description" name="description" content={calculatorDescription} />
              </MetaTags>
              <p className="d-none">{calculatorDescription}</p>
              <Calculator />
            </Route>
            <Route path="/">
              <MetaTags>
                <title>Prospect Theory</title>
                <meta id="meta-description" name="description" content={homeDescription} />
              </MetaTags>
              <p className="d-none">{homeDescription}</p>
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
