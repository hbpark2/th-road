import React from "react";
import { Route, Switch } from "react-router";

import Home from "../../Screens/Home/Home";
import PageDetail from "../../Screens/PageDetail/PageDetail";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/page_detail" component={PageDetail} />
		</Switch>
	);
};

export default Routes;
