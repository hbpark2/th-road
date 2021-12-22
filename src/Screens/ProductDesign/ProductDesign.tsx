import styled from "styled-components";
import { FadeIn, FadeInZ } from "../../Styles/animation";

import { useState } from "react";

import Slider from "react-slick";
import { swiperArr } from "./productDesignData";

const Container = styled.main`
  min-height: 100vh;
  animation: ${FadeIn};
  animation-duration: 1s;
  background-color: #333;

  .slick-prev {
    left: 15px;
  }

  .slick-next {
    right: 15px;
  }

  .center .slick-center {
    transform: scale(2);
    z-index: 99999;
    transition: all 0.5s;
    opacity: 1;
  }
`;

const Inner = styled.div``;

const SwiperWrap = styled.div`
  padding: 100px 0;
  margin: 0 auto;
`;

const SwiperItem = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SwiperInner = styled.div<{ bg?: string; isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 100%;
  margin: 0 auto;
  background: url(${({ bg }) => bg}) no-repeat;
  /* background-size: cover; */
  background-size: 100%;
  background-position: center center;
  animation-name: ${({ isActive }) => isActive && FadeInZ};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${({ theme }) => theme.white};
  transition: all 0.5s;

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    width: 100%;
  }
`;

const ProductDesign = () => {
  const settings = {
    className: "center",
    centerPadding: "100px",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
  };

  return (
    <Container>
      <Inner>
        <SwiperWrap>
          <Slider {...settings}>
            {swiperArr.map((item, index) => (
              <SwiperItem key={index}>
                <SwiperInner bg={item.src} />
              </SwiperItem>
            ))}
          </Slider>
        </SwiperWrap>
      </Inner>
    </Container>
  );
};

export default ProductDesign;
