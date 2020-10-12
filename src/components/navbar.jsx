import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a href="''" className="navbar-brand">
				Counter
			</a>
			<span>{totalCounters}</span>
		</nav>
	);
};

export default NavBar;
