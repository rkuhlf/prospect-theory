import React, {Component} from "react";


class Graph extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(window.Desmos, "while test");

    var elt = document.getElementById('test');
    // Create a new blank calculator and display it in the div
    console.log(window.Desmos);
    var calculator = window.Desmos.Calculator(elt);
    calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
  }

  render() {
    console.log("rendering");
    return (
      <div id="test" className="w-100 vh-100">
        
      </div>
    );
  }
}

export default Graph;