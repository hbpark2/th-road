import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
	mobile: "639px",
	tablet: "767px",
	laptop: "1023px",
};

const device = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
	laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

export const commonTheme: DefaultTheme = {
	keyBlue: "#4a99c3",
	keyDeepBlue: "#0b547a",
	black: "#252825",
	headerBg: "rgba(37, 40, 37,0.5)",
	white: "#ffffff",
	cream: "#e5e5e1",
	gray: "rgba(107 ,108 ,106 , 1)",
	beige: "#b2aca2",
	headerText: "#ffffff",
	fontSizeS: "12px",
	fontSizeM: "14px",
	fontSizeL: "18px;",
	fontSizeXL: "22px",
	fontSizeXXL: "28px",
	fontSizeXXXL: "48px",
	deviceScreen: device,
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color:${(props) => props.theme.black};
    font-family: 'Noto Sans KR', sans-serif;  
  }


  main{
    width: auto;
    transition: all .5s;
  }


  .lg-img-wrap > .lg-image {
    max-width: 80% !important;
    width: auto !important;
  }

  .cursor {
      width: 40px;
      height: 40px;
      border: 1px solid #333;
      border-radius: 100%;
      position: fixed;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode:difference;
      transition: all .5s ease;
      transition-property:  opacity, background-color, transform, mix-blend-mode;
    }

    .cursor--clicked {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fefefe;
    }

    .cursor--link-hovered {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fff;
      border-width: 1;
    }

    a {
      text-decoration: none;
    }

    /* html, body {
      cursor: none;
    } */

`;
