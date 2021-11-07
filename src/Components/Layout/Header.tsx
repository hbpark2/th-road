import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
	li {
		margin: 0 10px;
		font-weight: 500;
	}
`;

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
		</Container>
	);
};

export default Header;
