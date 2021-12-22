import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade, A11y } from "swiper";
import { FadeIn, FadeInTopToBottom, FadeInZ } from "../../../Styles/animation";
import "swiper/swiper-bundle.css";
import SliderImg1 from "../../../Assets/img/main-swiper-1.png";
import SliderImg2 from "../../../Assets/img/main-swiper-2.png";
import SliderImg3 from "../../../Assets/img/main-swiper-3.png";
import SliderImg4 from "../../../Assets/img/main-swiper-4.png";
import { positionType } from "../Home";

SwiperCore.use([Navigation, Pagination, EffectFade, A11y]);

const SwiperWrap = styled.article`
  z-index: 150;
  & .swiper-container {
    width: 100%;
    height: 100%;
    cursor: none;
  }
  & .swiper-wrapper {
    padding-inline-start: 0;
  }
  & .swiper-button-prev {
    left: 0;
  }
  & .swiper-button-next {
    right: 0;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    width: 50%;
    height: 100%;
    cursor: none;
  }

  & .swiper-button-prev:after,
  .swiper-button-next:after {
    opacity: 0;
    cursor: none;
  }

  & .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
  }
  & .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
  }
`;

const SwiperInner = styled.div<{ bg: string; isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${window.innerHeight}px;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  animation-name: ${({ isActive }) => isActive && FadeInZ};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${({ theme }) => theme.white};
  img {
    width: 100%;
  }
  @media ${({ theme }) => theme.deviceScreen.laptop} {
    background-size: cover;
    background-position: center center;
  }
`;

const MainText = styled.p`
  position: relative;
  display: flex;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeXXXL};
  line-height: 1.5em;
  margin-bottom: 20px;
  animation-name: ${FadeIn};
  animation-duration: 1s;
  @media ${({ theme }) => theme.deviceScreen.laptop} {
    font-size: 34px;
  }
`;

const AnimationSpan = styled.span<{ delay: number }>`
  position: relative;
  top: 0px;
  display: block;
  min-width: 0.2em;
  animation-name: ${FadeInTopToBottom};
  animation-duration: 0.7s;
  animation-delay: ${({ delay }) => {
    return `${delay / 15}s`;
  }};
  animation-fill-mode: both;
  opacity: 0;
`;

const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontSizeXL};
  text-align: center;
  animation-name: ${FadeIn};
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: both;
  opacity: 0;

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    padding: 0 10px;
    line-height: 1.4em;
    font-size: ${({ theme }) => theme.fontSizeL};
    text-align: center;
  }
`;

export type SwiperArrTypes = {
  [T in "src" | "alt" | "mainText" | "subText"]: string;
};

export const swiperArr: Array<SwiperArrTypes> = [
  {
    src: SliderImg1,
    alt: "배너 이미지",
    mainText: "Inspiration",
    subText: "수많은 경험으로 부터.",
  },
  {
    src: SliderImg2,
    alt: "배너 이미지",
    mainText: "Expirence",
    subText: "수많은 경험으로 부터.",
  },
  {
    src: SliderImg3,
    alt: "배너 이미지",
    mainText: "Humble",
    subText: "수많은 경험으로 부터.",
  },
  {
    src: SliderImg4,
    alt: "배너 이미지",
    mainText: "INSPIRATION",
    subText: "수많은 경험으로 부터.",
  },
];

interface SwiperSectionProps {
  loading: boolean;
  SetCustomCursor: (T: boolean) => void;
  setCurrentPosition: (T: positionType) => void;
}

const SwiperSection: React.FC<SwiperSectionProps> = ({
  loading,
  SetCustomCursor,
  setCurrentPosition,
}) => {
  const makeTextAnimation = (text: string | null) => {
    const splitText = text?.split("");
    return splitText?.map((item, index) => {
      return (
        <AnimationSpan key={index} delay={index}>
          {item}
        </AnimationSpan>
      );
    });
  };

  const mouserOverSwiper: Function = (e: MouseEvent) => {
    SetCustomCursor(true);

    if (window.innerWidth - e.clientX > window.innerWidth / 2) {
      setCurrentPosition("left");
    } else {
      setCurrentPosition("right");
    }
  };

  return (
    <SwiperWrap
      onMouseMove={(e) => mouserOverSwiper(e)}
      onMouseOut={() => SetCustomCursor(false)}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop
        effect="fade"
        speed={1000}
        fadeEffect={{ crossFade: true }}
        a11y={{
          prevSlideMessage: "previousSlide",
          nextSlideMessage: "nextSlide",
        }}
      >
        {swiperArr.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SwiperInner bg={item.src} isActive={isActive && !loading}>
                {isActive && (
                  <>
                    <MainText>{makeTextAnimation(item.mainText)}</MainText>
                    <SubText>{item.subText}</SubText>
                  </>
                )}
              </SwiperInner>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
};

export default SwiperSection;
