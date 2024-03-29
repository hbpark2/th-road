import React from "react";
import styled from "styled-components";
import { Stroke } from "../../Styles/animation";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
	width: 100vw;
	height: ${window.innerHeight}px;
	background-color: ${({ theme }) => theme.black};
	svg {
		font-family: "Noto Sans KR", sans-serif;
		position: absolute;
		width: 100%;
		height: 100%;
	}
	svg text {
		text-transform: uppercase;
		animation: ${Stroke} 3s infinite alternate;
		stroke-width: 2;
		stroke: #fff;
		font-size: 140px;
	}
`;

export const LogoText = styled.svg`
	font-family: "Noto Sans KR", sans-serif;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;

	text {
		text-transform: uppercase;
		animation: ${Stroke} 2s infinite alternate;
		stroke-width: 2;
		stroke: #fff;
		font-size: 140px;
	}
`;
const Loading = () => {
	return (
		<Container>
			<svg viewBox="0 0 1320 300">
				<text x="50%" y="50%" dy=".35em" textAnchor="middle">
					th-road
				</text>
			</svg>
		</Container>
	);
};

export default Loading;
