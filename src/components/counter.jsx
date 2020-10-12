import React, { Component } from "react";

export default class Counter extends Component {
	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClass()}>{this.props.counter.value}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm m-2">
					Delete
				</button>
			</React.Fragment>
		);
	}

	getBadgeClass() {
		return `badge badge-${this.props.counter.count === 0 ? "warning" : "primary"} mx-2`;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
