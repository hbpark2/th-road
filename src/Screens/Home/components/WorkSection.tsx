import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useScroll } from "../../../Hooks/Scroll";
import { workArr } from "./workData";

const Container = styled.article`
  /* background-color: ${({ theme }) => theme.white}; */

  padding: 100px 0;
  background: rgb(255, 255, 255);
  /* overflow: hidden; */
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 44%,
    rgba(229, 229, 225, 1) 100%
  );
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  -ms-grid-columns: 1fr 1fr 1fr 1.8fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1.8fr 1fr 1fr 1fr;

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    width: 120vw;
    left: 50%;
    transform: translateX(-50%);
    grid-gap: 5px;
    -ms-grid-columns: 1fr 1fr 1fr 1.8fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1.8fr 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.deviceScreen.tablet} {
    width: 160vw;
  }

  @media ${({ theme }) => theme.deviceScreen.mobile} {
    -ms-grid-columns: 1fr 1fr 1.8fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1.8fr 1fr 1fr;
    width: 200vw;
  }
`;

const Column = styled.ul<{
  customTop?: number;
  transition?: number;
  center?: boolean;
  baseTop?: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  transform: ${({ customTop, center }) =>
    customTop
      ? center
        ? "translateY(-50%)"
        : `translateY(calc(-50% - ${customTop}px))`
      : "translateY(-50%)"};

  top: ${({ baseTop }) => `${baseTop}%`};
  transition: transform ${({ transition, center }) => !center && transition}s;

  li {
    width: 100%;
    margin: 15px 0;
    border-radius: 10px;

    img {
      width: 100%;
    }
  }
`;

const WorkSection = () => {
  const { scrollY } = useScroll();
  const [sclTop, setSclTop] = useState<number>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionTop = sectionRef.current?.offsetTop! as number;
  const sectionBottom = (sectionTop +
    sectionRef.current?.offsetHeight!) as number;

  const scrollOnWorkSection = () => {
    if (scrollY < sectionTop - 500 || scrollY > sectionBottom + 300) {
      return;
    }

    const workScl = scrollY - sectionTop;
    setSclTop(Math.floor(workScl / 3));
  };

  useEffect(() => {
    scrollOnWorkSection();
  });

  return (
    <Container ref={sectionRef}>
      <Inner>
        {workArr.map((item, index) => {
          if (window.innerWidth < 640) {
            return (
              index !== 0 &&
              index !== 6 && (
                <Column
                  key={`work${index}`}
                  customTop={sclTop}
                  center={item.center}
                  transition={item.transition}
                  baseTop={item.baseTop}
                >
                  {item.image.map((img, index) => (
                    <li key={`workImg${index}`}>
                      <img src={img.src} alt={img.alt} />
                    </li>
                  ))}
                </Column>
              )
            );
          }
          return (
            <Column
              key={`work${index}`}
              customTop={sclTop}
              center={item.center}
              transition={item.transition}
              baseTop={item.baseTop}
            >
              {item.image.map((img, index) => (
                <li key={`workImg${index}`}>
                  <img src={img.src} alt={img.alt} />
                </li>
              ))}
            </Column>
          );
        })}
      </Inner>
    </Container>
  );
};

export default WorkSection;
