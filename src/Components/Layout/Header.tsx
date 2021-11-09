import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
	background-color: transparent;
	color: ${(props) => props.theme.headerText};
	z-index: 100;
	transition: background-color 0.5s;
	@media screen and (min-width: 1025px) {
		&:hover {
			background-color: ${(props) => props.theme.headerBg};
		}
	}
`;

const LogoWrap = styled.h1`
	font-size: 26px;
`;

const Logo = styled.span``;

const Nav = styled.nav`
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const NavUl = styled.ul`
	display: flex;
	flex-direction: column;
	li {
		margin: 0 10px;
		font-weight: 500;
	}
	@media screen and (max-width: 1024px) {
		position: absolute;
		left: 20px;
		bottom: 50px;
	}
`;

const NavList = styled.li<{ menuOpen?: boolean }>`
	position: relative;
	right: ${(props) => (props.menuOpen ? "0px" : "-50px")};
	opacity: ${(props) => (props.menuOpen ? "1" : "0")};
	transition: all 0.5s;
	transition-delay: ${(props) => props.menuOpen && "1s"};
	font-size: 36px;
	line-height: 1.2em;
`;

const MobileNav = styled.nav<{ menuOpen: boolean }>`
	display: none;
	@media screen and (max-width: 1024px) {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: ${window.innerHeight}px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${(props) => props.theme.black};
		transition: all 1.5s;
		transition-timing-function: ${(props) =>
			props.menuOpen
				? "cubic-bezier(0.1, 0.82, 0.165, 1)"
				: "cubic-bezier(0.1, 0.82, 0.165, 1)"};

		${(props) =>
			props.menuOpen
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

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [listState, setListState] = useState<boolean>(false);

	useEffect(() => {
		setListState(menuOpen);
	}, [menuOpen]);
	return (
		<Container>
			<LogoWrap>
				<Logo>TH-ROAD</Logo>
			</LogoWrap>
			<MenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav>
				<NavUl>
					<li>
						<Link to="/">COWBOY 3</Link>
					</li>
					<li>
						<Link to="/">COWBOY 4</Link>
					</li>
					<li>
						<Link to="/">COWBOY ST</Link>
					</li>
					<li>
						<Link to="/">APP</Link>
					</li>
					<li>
						<Link to="/">SERVICES</Link>
					</li>
				</NavUl>
			</Nav>

			<MobileNav menuOpen={menuOpen}>
				<LogoText viewBox="0 600 1320 300">
					<text x="50%" y="0" dy=".35em" textAnchor="middle">
						th-road
					</text>
				</LogoText>
				<NavUl>
					<NavList menuOpen={listState}>
						<Link to="/">COWBOY 3</Link>
					</NavList>
					<NavList menuOpen={listState}>
						<Link to="/">COWBOY 4</Link>
					</NavList>
					<NavList menuOpen={listState}>
						<Link to="/">COWBOY ST</Link>
					</NavList>
					<NavList menuOpen={listState}>
						<Link to="/">APP</Link>
					</NavList>
					<NavList menuOpen={listState}>
						<Link to="/">SERVICES</Link>
					</NavList>
				</NavUl>
			</MobileNav>
		</Container>
	);
};

export default Header;
