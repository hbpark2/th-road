import React from "react";
import { Route } from "react-router";

import Home from "../../Screens/Home/Home";

const Routes = () => {
	return (
		<>
			<Route exact path="/" component={Home} />
		</>
	);
};

export default Routes;
