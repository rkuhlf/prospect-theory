import React, {Component} from "react";

class Choice extends Component {
	getProbabilities(key, options) {
		return (
			<div className="col-md">
				<h6>{key}</h6>
				{
					Object.keys(options[key]).map(item => {
						console.log("Key: ", key)
						return (
						<div key={Math.random()}>
							<span>{item}: </span>
							<span>{options[key][item]}</span>
						</div>
						)
					})
				}
				<hr className="d-md-none"/>
			</div>
		)
	}

	render() {
		console.log(this.props.options);
		return (
			<div className="my-2 container-fluid">
				<hr className="d-md-none" />
				<div className="row">
				{
					Object.keys(this.props.options).map((key) => this.getProbabilities(key, this.props.options))
				}
				</div>
			</div>
		)
	}
}


export default Choice;