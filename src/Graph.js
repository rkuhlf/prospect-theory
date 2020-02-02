import React, {Component} from "react";


class Graph extends Component {
  componentDidMount() {
    var elt = document.getElementById(this.props.id);
    // Create a new blank calculator and display it in the div

    var calculator = window.Desmos.Calculator(elt, {
      border: false,
      expressionsCollapsed: true
    });
    calculator.setExpression({ id: 0, latex: this.props.func });
  }

  render() {
    return (
      <div id={this.props.id} className="shadow-sm w-100 vh-100">
        
      </div>
    );
  }
}

export default Graph;