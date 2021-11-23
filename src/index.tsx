import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import App from "./Components/Routes/App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("wrapper")
);
