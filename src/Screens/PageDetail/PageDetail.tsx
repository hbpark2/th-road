import React from "react";
import styled from "styled-components";
import { FadeIn } from "../../Styles/animation";

const Container = styled.main`
	min-height: 100vh;
	animation: ${FadeIn};
	animation-duration: 1s;
	background-color: #0af;
`;

const PageDetail = () => {
	return <Container></Container>;
};

export default PageDetail;
