import React from "react";
import styled from "styled-components";
import { Stroke } from "../../Styles/theme";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.black};
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
