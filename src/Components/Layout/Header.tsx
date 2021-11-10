import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
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
		background-color: ${(props) => props.theme.headerBg};
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

const Nav = styled.nav`
	display: block;
	@media ${({ theme }) => theme.deviceScreen.laptop} {
		display: none;
	}
`;

const NavUl = styled.ul`
	display: flex;
	li {
		margin: 0 10px;
		font-weight: 500;
	}
	@media ${({ theme }) => theme.deviceScreen.laptop} {
		flex-direction: column;
		position: absolute;
		left: 20px;
		bottom: 50px;
	}
`;

const NavList = styled.li<{ menuOpen?: boolean }>`
	position: relative;
	right: ${({ menuOpen }) => (menuOpen ? "0px" : "-50px")};
	opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
	transition-delay: ${({ menuOpen }) => menuOpen && "1s"};
	transition: all 0.5s;
	font-size: 36px;
	line-height: 1.2em;
`;

const MobileNav = styled.nav<{ menuOpen: boolean }>`
	display: none;
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
		transition: all 1.5s;
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
						transition-delay: 1s;
				  `}
	}
`;

type menuArrType = {
	[T in "text" | "url" | "title"]: string;
};
const menuArr: menuArrType[] = [
	{ text: "COWBOY 3", url: "/", title: "" },
	{ text: "COWBOY 4", url: "/", title: "" },
	{ text: "COWBOY ST", url: "/", title: "" },
	{ text: "APP", url: "/", title: "" },
	{ text: "SERVICES", url: "/", title: "" },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [listState, setListState] = useState<boolean>(false);

	useEffect(() => {
		setListState(menuOpen);
	}, [menuOpen]);

	return (
		<Container>
			<LogoWrap>
				<Logo>
					<Link to="">TH-ROAD</Link>
				</Logo>
			</LogoWrap>
			<MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav aria-hidden={!menuOpen}>
				<NavUl>
					{menuArr.map((item, index) => (
						<li key={`menuList${index}`}>
							<NavLink to={item.url} title={item.title}>
								{item.text}
							</NavLink>
						</li>
					))}
				</NavUl>
			</Nav>

			<MobileNav
				menuOpen={menuOpen}
				aria-hidden={menuOpen}
				id="menu-list"
				role="menu"
				aria-labelledby="menu-button"
			>
				<LogoText viewBox="0 600 1320 300">
					<text x="50%" y="0" dy=".35em" textAnchor="middle">
						th-road
					</text>
				</LogoText>
				<NavUl>
					{menuArr.map((item, index) => (
						<NavList key={`menuList${index}`} menuOpen={listState}>
							<NavLink to={item.url} title={item.title}>
								{item.text}
							</NavLink>
						</NavList>
					))}
				</NavUl>
			</MobileNav>
		</Container>
	);
};

export default Header;
