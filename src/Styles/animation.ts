import { keyframes } from "styled-components";

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
    visibility: hidden;
    opacity:0;
  }
  to {
    visibility: visible;
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
