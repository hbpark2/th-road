import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, commonTheme } from "../../Styles/theme";
import Header from "../Layout/Header";
import Routes from "./Routes";
const App = () => {
	return (
		<ThemeProvider theme={commonTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Header />
				<Routes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
