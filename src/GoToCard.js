import React, {Component} from 'react';
import {Link} from "react-router-dom";

class GoToCard extends Component {

  render() {
    return (
      <div className="col-sm mb-3">
        <div className="card">
          <img className="card-img-top scale-image" src={this.props.imgURL} alt="Decorative vector art"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.cardTitle}</h4>
            <p className="card-text">{this.props.children}</p>
            <Link to={this.props.linkTo} className="card-link btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default GoToCard;
