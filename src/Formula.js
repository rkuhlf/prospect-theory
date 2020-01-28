import React, {Component} from "react";
import {Context, Node} from 'react-mathjax4'

class Formula extends Component {
  render() {
    if (!this.props.notInline) {
      return (
        <Context input='tex'>
          <Node inline>{this.props.tex}</Node>
        </Context>
      );
    }
    return (
      <Context input='tex'>
        <Node>{this.props.tex}</Node>
      </Context>
    );
  }
}

export default Formula