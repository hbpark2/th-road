import React, { SetStateAction, useState } from "react";
import styled from "styled-components";
import { CloseBtnAni1, CloseBtnAni2 } from "../../Styles/animation";

const Container = styled.button`
	display: none;
	@media ${({ theme }) => theme.deviceScreen.laptop} {
		display: block;
		position: relative;
		z-index: 100;
		transition: all 0.5s;
		overflow: hidden;
	}
`;

const Bar = styled.i<{ menuOpen: boolean }>`
	position: relative;
	left: 0;
	display: block;
	background-color: #fff;
	height: 5px;
	margin-top: 5px;
	border-radius: 5px;
	transition: left 0.5s;
	transition-delay: ${({ menuOpen }) => !menuOpen && "0.5s"};

	&:nth-of-type(1) {
		width: 15px;
		left: ${({ menuOpen }) => (menuOpen ? "-40px" : "0px")};
		transition: left 0.5s;
	}
	&:nth-of-type(2) {
		width: 25px;
		left: ${({ menuOpen }) => (menuOpen ? "-40px" : "0px")};
		transition: left 0.7s;
	}
	&:nth-of-type(3) {
		width: 35px;
		left: ${({ menuOpen }) => (menuOpen ? "-40px" : "0px")};
		transition: left 0.9s;
	}
`;

const CloseBtn = styled.i<{ menuOpen: boolean }>`
	position: absolute;
	display: block;
	width: 30px;
	height: 30px;
	i {
		position: absolute;
		right: 0;
		display: block;
		background-color: #fff;
		height: 4px;
		border-radius: 5px;
		width: ${({ menuOpen }) => (menuOpen ? "30px" : "0px")};
		transition: all 0.5s;
		transition-delay: ${({ menuOpen }) => menuOpen && "0.5s"};
		bottom: 40px;
	}
`;
const CloseObjFirst = styled.i`
	transform: rotate(45deg);
	transform-origin: center center;
`;
const CloseObjSecond = styled.i`
	transform: rotate(-45deg);
	transform-origin: center center;
`;

interface MenuBtnProps {
	menuOpen: boolean;
	setMenuOpen: (T: boolean) => void;
}
const MenuBtn: React.FC<MenuBtnProps> = ({ menuOpen, setMenuOpen }) => {
	const onMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container
			type="button"
			onClick={onMenuClick}
			id="nav-button"
			aria-haspopup="menu"
			aria-controls="navigation"
			aria-expanded={menuOpen}
		>
			<Bar menuOpen={menuOpen} />
			<Bar menuOpen={menuOpen} />
			<Bar menuOpen={menuOpen} />

			<CloseBtn menuOpen={menuOpen}>
				<CloseObjFirst />
				<CloseObjSecond />
			</CloseBtn>
		</Container>
	);
};

export default MenuBtn;
