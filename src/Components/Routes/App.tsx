import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, commonTheme } from "../../Styles/theme";
import Header from "../Layout/Header";
import Routes from "./Routes";
import { StoreProvider } from "../../Context/ContextStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={commonTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
