import React, {Component} from "react";
import {Context, Node} from 'react-mathjax4'

class Formula extends Component {
  render() {
    return (
      <Context input='tex'>
        <Node inline>{this.props.tex}</Node>
      </Context>
    );
  }
}

export default Formula