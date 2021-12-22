import React from "react";
import { Route, Switch } from "react-router";

import Home from "../../Screens/Home/Home";
import ProductDesign from "../../Screens/ProductDesign/ProductDesign";
import NotFound from "../Common/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product_design" component={ProductDesign} />
    </Switch>
  );
};

export default Routes;
