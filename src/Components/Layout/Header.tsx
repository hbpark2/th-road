import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";
import { LogoText } from "../Common/Loading";
import MenuBtn from "./MenuBtn";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
  color: ${({ theme }) => theme.headerText};
  z-index: 100;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.headerBg};
  }

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    &:hover {
      background-color: transparent;
    }
  }
`;

const LogoWrap = styled.h1`
  font-size: 26px;
`;

const Logo = styled.span``;

const Nav = styled.nav<{ menuOpen: boolean }>`
  display: block;
  @media ${({ theme }) => theme.deviceScreen.laptop} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: ${window.innerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.black};
    transition: all 1s;
    transition-timing-function: ${({ menuOpen }) =>
      menuOpen
        ? "cubic-bezier(0.1, 0.82, 0.165, 1)"
        : "cubic-bezier(0.1, 0.82, 0.165, 1)"};

    ${({ menuOpen }) =>
      menuOpen
        ? css`
            opacity: 1;
            visibility: visible;
          `
        : css`
            opacity: 0;
            visibility: hidden;
            transition-delay: 0.5s;
          `}
  }
`;

const NavUl = styled.ul`
  display: flex;

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    flex-direction: column;
    position: absolute;
    left: 20px;
    bottom: 50px;
  }
`;

const NavList = styled.li<{ menuOpen?: boolean }>`
  margin: 0 10px;
  font-weight: 500;
  @media ${({ theme }) => theme.deviceScreen.laptop} {
    position: relative;
    right: ${({ menuOpen }) => (menuOpen ? "0px" : "-50px")};
    opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
    transition: all 0.5s;
    transition-delay: ${({ menuOpen }) => menuOpen && "0.5s"};
    font-size: 36px;
    line-height: 1.2em;
  }
`;

const SLogoText = styled(LogoText)`
  display: none;

  @media ${({ theme }) => theme.deviceScreen.laptop} {
    display: block;
  }
`;

type menuArrType = {
  [T in "text" | "url" | "title"]: string;
};
const menuArr: menuArrType[] = [
  { text: "About TH", url: "/", title: "" },
  { text: "Product Design", url: "/product_design", title: "" },
  { text: "Visual Design", url: "/", title: "" },
  { text: "Interior Design", url: "/", title: "" },
  { text: "Personal Works", url: "/", title: "" },
];

const Header = () => {
  const { menuOpen, setMenuOpen } = useContext(CurrentContext);
  const [listState, setListState] = useState<boolean>(false);

  useEffect(() => {
    setListState(menuOpen);

    // 접근성 main - aria-hidden
    const container = document.querySelector("main")! as HTMLDivElement;
    container.setAttribute(
      "aria-hidden",
      String(window.innerWidth > 640 ? true : !menuOpen)
    );
  }, [menuOpen]);

  return (
    <Container>
      <LogoWrap>
        <Logo>
          <Link to="">TH-ROAD</Link>
        </Logo>
      </LogoWrap>
      <MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Nav
        menuOpen={menuOpen}
        id="navigation"
        aria-labelledby="nav-button"
        aria-hidden={window.innerWidth < 640 ? menuOpen : true}
      >
        <h2 className="blind">네비게이션 영역</h2>
        <SLogoText viewBox="0 600 1320 300">
          <text x="50%" y="0" dy=".35em" textAnchor="middle">
            th-road
          </text>
        </SLogoText>
        <NavUl>
          {menuArr.map((item, index) => (
            <NavList key={`menuList${index}`} menuOpen={listState}>
              <h3>
                <NavLink to={item.url} title={item.title}>
                  {item.text}
                </NavLink>
              </h3>
            </NavList>
          ))}
        </NavUl>
      </Nav>
    </Container>
  );
};

export default Header;
