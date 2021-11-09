import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";

export const commonTheme: DefaultTheme = {
	keyBlue: "#4a99c3",
	keyDeepBlue: "#0b547a",
	black: "#252825",
	headerBg: "rgba(37, 40, 37,0.5)",
	white: "#ffffff",
	gray: "rgba(107 ,108 ,106 , 1)",
	beige: "#b2aca2",
	headerText: "#ffffff",
	fontSizeS: "12px",
	fontSizeM: "14px",
	fontSizeL: "18px;",
	fontSizeXL: "22px",
	fontSizeXXL: "28px",
	fontSizeXXXL: "48px",
};

//global
export const GlobalStyles = createGlobalStyle`

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

//CloseBtn
export const CloseBtnAni1 = keyframes`
  0% {
    transform: rotate(45deg) scaleX(0.5);
  }
  100% {
    transform: rotate(45deg) scaleX(1);  
  }
`;

//CloseBtn
export const CloseBtnAni2 = keyframes`
  0% {
    transform: rotate(-45deg) scaleX(0.5);
  }
  100% {
    transform: rotate(-45deg) scaleX(1);  
  }
`;

//Swiper Slide
export const FadeInZ = keyframes`
  from {
    transform: scale(1.2);
    opacity:0;
  }
  to {
    transform: scale(1);
    opacity:1;
  }
`;

export const CircleAni = keyframes`
 0% {
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform: rotate(0deg);
   }
   20% {
      border-radius: 70% 60% / 70% 60%;
   }
   40% {
      border-radius: 70% 60% / 70% 60%;
   }
   60% {
      border-radius: 60% 50% / 60% 50%;
   }
   100% {
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform: rotate(360deg);
   }
`;

export const FadeInTopToBottom = keyframes`
  from {
    top: -60px;
    opacity:0;
  }
  to {
    top: 0px;
    opacity:1;
  }
`;

export const TopToBottom = keyframes`
  from {
    top: -30px;
  }
  to {
    top: 0px;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const Stroke = keyframes`
  0%   {
    fill: rgba(255,255,255,0); stroke: rgba(200,200,200,1);
    stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
  }
  70%  {fill: rgba(255,255,255,0); stroke: rgba(200,200,200,1); }
  80%  {fill: rgba(255,255,255,0); stroke: rgba(200,200,200,1); stroke-width: 3; }
  100% {
    fill: rgba(255,255,255,1); stroke: rgba(200,200,200,0); 
    stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
  }
`;
