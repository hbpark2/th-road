import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import App from "./Components/Routes/App";

const rootElement = document.getElementById("wrapper")! as HTMLElement;
if (rootElement.hasChildNodes()) {
	hydrate(<App />, rootElement);
} else {
	render(<App />, rootElement);
}

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("wrapper")
// );
