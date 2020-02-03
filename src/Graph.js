import React, {Component} from "react";


class Graph extends Component {
  componentDidMount() {
    var elt = document.getElementById(this.props.id);
    // Create a new blank calculator and display it in the div

    var calculator = window.Desmos.Calculator(elt, {
      border: false,
      expressionsCollapsed: true,
      lockViewport: !this.props.allowScroll
    });
    calculator.setExpression({ 
      id: 0, 
      latex: this.props.func
    });
    if (this.props.bounds) {
      calculator.setMathBounds(this.props.bounds);
    }
  }

  render() {
    let classNames = "my-2 shadow-sm w-100 vh-100";
    if (this.props.className) {
      classNames += " " + this.props.className;
    }
    return (
      <div id={this.props.id} className={classNames}>
        
      </div>
    );
  }
}

export default Graph;