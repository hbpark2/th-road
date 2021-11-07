import React, { SetStateAction } from "react";
import styled from "styled-components";
import { CloseBtnAni1, CloseBtnAni2 } from "../../Styles/theme";

const Container = styled.button`
	display: block;
	position: relative;
	z-index: 100;
	transition: all 0.5s;
	overflow: hidden;

	@media screen and (min-width: 1025px) {
		display: none;
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
	transition-delay: ${(props) => !props.menuOpen && "0.5s"};

	&:nth-of-type(1) {
		width: 15px;
		left: ${(props) => (props.menuOpen ? "-40px" : "0px")};
		transition: left 0.5s;
	}
	&:nth-of-type(2) {
		width: 25px;
		left: ${(props) => (props.menuOpen ? "-40px" : "0px")};
		transition: left 0.7s;
	}
	&:nth-of-type(3) {
		width: 35px;
		left: ${(props) => (props.menuOpen ? "-40px" : "0px")};
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
		width: ${(props) => (props.menuOpen ? "30px" : "0px")};
		transition: all 0.5s;
		transition-delay: ${(props) => props.menuOpen && "0.5s"};
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
	setMenuOpen: (menuOpen: boolean) => void;
}
const MenuBtn: React.FC<MenuBtnProps> = ({ menuOpen, setMenuOpen }) => {
	const onMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container onClick={onMenuClick}>
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
