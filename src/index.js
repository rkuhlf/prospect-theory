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
// use this https://www.heymeta.com/url/framer.com https://svgshare.com/i/HqN.svg
// add enriched result faq (for explanation) https://developers.google.com/search/docs/data-types/faqpage
// add enriched result for text to speech https://developers.google.com/search/docs/data-types/speakable
// add enriched result searchbox https://developers.google.com/search/docs/data-types/sitelinks-searchbox
// add favicon https://support.google.com/webmasters/answer/9290858?hl=en&ref_topic=9456381
// make mobile friendly
// make sure to test reindexing before deciding that meta tags are displaying incorrectly

class App extends Component {
  metaTags(title, description) {
    return (
      <div>
        <MetaTags>
          <title>Examples of Prospect Theory Applied</title>
          <meta id="meta-description" name="description" content={description} />

          <meta itemprop="name" content={title} />
          <meta itemprop="description" content={description} />
          <meta itemprop="image" content="https://svgshare.com/i/HqN.svg" />

          <meta property="og:url" content="https://www.prospect-theory.herokuapp.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://svgshare.com/i/HqN.svg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://svgshare.com/i/HqN.svg" />
        </MetaTags>
        <p className="d-none">{description}</p>
      </div>
    );
  }

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
              {this.metaTags("Examples of Prospect Theory Applied", exampleDescription)}
              <Examples />
            </Route>
            <Route path="/explanation">
              {this.metaTags("Prospect Theory Explained", explanationDescription)}
              <Explanation />
            </Route> 
            <Route path="/calculator">
              {this.metaTags("Prospect Theory Calculator", calculatorDescription)}
              <Calculator />
            </Route>
            <Route path="/">
              {this.metaTags("Prospect Theory", homeDescription)}
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
