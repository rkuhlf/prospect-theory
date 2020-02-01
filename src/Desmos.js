import React, {Component} from "react";
import "https://www.desmos.com/api/v1.4/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";


class Desmos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var elt = document.getElementById('calculator');
    // Create a new blank calculator and display it in the div
    var calculator = Desmos.Calculator(elt);
  }

  render() {
    <div id="calculator"></div>
  }
}

export default Desmos;