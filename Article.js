import React, {Component} from "react";
import ScrollLink from "./ScrollLink";

class Article extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 id="title" className="text-primary">{this.props.title}</h1>
        <div className="row">
          <div className="col-sm">
            <div className="d-none d-sm-block shadow-sm p-3 mb-3 bg-white rounded">
              <div className="sticky-top">
                <ul className="list-unstyled">
                  {
                    this.props.scrollLinks.map((item, index) => {
                      return (
                        <li className="btn btn-link d-block text-left">
                          <ScrollLink scrollID={this.props.scrollIds[index]}>{item}</ScrollLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            {this.props.children}
          </div>
          <div className="col-sm-1">
          </div>
        </div>
      </div>
    );
  }
}

export default Article;