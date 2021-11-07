import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignLeft,
	faAngleLeft,
	faArrowLeft,
	faArrowRight,
	faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CircleAni } from "../../Styles/theme";

const Container = styled.div<{ currentPosition: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #fff;
	width: 40px;
	height: 40px;
	position: fixed;
	transform: translate(-50%, -50%);
	pointer-events: none;
	mix-blend-mode: difference;
	z-index: 9999;
	transition: all 0.5s ease;
	transition-property: opacity, background-color, transform, mix-blend-mode;
	border-radius: 50%;
	&::after {
		position: absolute;
		top: -2px;
		left: -2px;
		display: block;
		width: 44px;
		height: 44px;
		content: "";
		border: 1px solid #fff;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
	}
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 40px;
		height: 40px;
		content: "";
		border: 1px solid #fff;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		animation-direction: reverse;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

type PostionTypes = {
	x: number;
	y: number;
};

interface CursorProps {
	currentPosition: string;
}
const Cursor: React.FC<CursorProps> = ({ currentPosition }) => {
	const [position, setPosition] = useState<PostionTypes>({ x: -50, y: -50 });

	useEffect(() => {
		addEventListeners();

		return () => removeEventListeners();
	}, []);

	const addEventListeners = () => {
		document.addEventListener("mousemove", onMouseMove);
	};

	const removeEventListeners = () => {
		document.removeEventListener("mousemove", onMouseMove);
	};

	const onMouseMove = (e: MouseEvent) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<Container
			currentPosition={currentPosition}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
		>
			{currentPosition === "left" ? (
				<FontAwesomeIcon icon={faArrowLeft} color="#fff" />
			) : (
				<FontAwesomeIcon icon={faArrowRight} color="#fff" />
			)}
			{/* {currentPosition} */}
		</Container>
	);
};

export default Cursor;
