import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {

  render() {
    return (
      <footer className="page-footer font-small bg-dark text-light pt-4">

        
        <div className="container-fluid text-center text-sm-left">
          <div className="row">
            <div className="col-sm-6 mt-sm-0 mt-3">
              <h5 className="text-uppercase">Prospect Theory</h5>
              <p>Learn all about prospect theory, from the fundamentals to the history.</p>

            </div>
            
            <hr className="clearfix w-100 d-sm-none border-light pb-3" />

            <div className="col-sm-3 mb-sm-0 mb-3">

              
              <h5 className="text-uppercase">Other Pages</h5>

              <ul className="list-unstyled">
                <li>
                  <Link className="text-light" to="/home">Home</Link>
                </li>
                <li>
                  <Link className="text-light" to="/explanation">Explanation</Link>
                </li>
                <li>
                  <Link className="text-light" to="/examples">Examples</Link>
                </li>
                <li>
                  <Link className="text-light" to="/calculator">Calculator</Link>
                </li>
              </ul>

            </div>
            

            
            <div className="col-sm-3 mb-sm-0 mb-3">
              <h5 className="text-uppercase">Further Reading</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="text-light" href="https://en.wikipedia.org/wiki/Prospect_theory">Wikipedia Article</a>
                </li>
                <li>
                  <a className="text-light" href="https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/prospect-theory/">Behavioral Economics</a>
                </li>
                <li>
                  <a className="text-light" href="https://www.investopedia.com/terms/p/prospecttheory.asp">Investopedia</a>
                </li>
                <li>
                  <a className="text-light" href="https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA">Thinking Fast and Slow</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a className="text-light" href="https://kuhlman-portfolio.stackblitz.io"> Riley Kuhlman</a>
        </div>
      </footer>
      
    );
  }
}

export default Footer;