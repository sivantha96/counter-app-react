import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { Component } from "react";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
		],
	};

	handleDelete = (id) => {
		const counters = this.state.counters.filter((counter) => counter.id !== id);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const index = this.state.counters.indexOf(counter);
		const counters = [...this.state.counters];
		counters[index].value++;
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter((counter) => counter.value > 0).length} />
				<main className="container">
					<Counters
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onReset={this.handleReset}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
