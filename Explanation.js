import React, {Component} from 'react';
import ScrollLink from "./ScrollLink";

class Home extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 id="explanation-title" className="text-primary">Explanation</h1>
        <div className="row">
          <div className="col-sm">
            <div className="d-none d-sm-block shadow-sm p-3 mb-3 bg-white rounded">
              <div className="sticky-top">
                <ul className="list-unstyled">
                  <li className="btn btn-link d-block text-left">
                    <ScrollLink scrollID="explanation-title">Explanation</ScrollLink>
                  </li>
                  <li className="btn btn-link d-block text-left">
                    <ScrollLink scrollID="id">link</ScrollLink>
                  </li>
                  <li className="btn btn-link d-block text-left">
                    <ScrollLink scrollID="id">link</ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <p>Your home for getting a grip on what prospect theory means and using that to understand decisions.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            a;lsdkjf;alkdf </p>
          </div>
          <div className="col-sm-1">
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
