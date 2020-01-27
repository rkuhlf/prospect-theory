import React, {Component} from "react";

class ScrollLink extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.getElementById(this.props.scrollID).scrollIntoView() 
  }

  render() {
    return (
      <span onClick={this.handleClick}>{this.props.children}</span>
    )
  }
}

export default ScrollLink;