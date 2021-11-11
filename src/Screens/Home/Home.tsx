import React, { ReactComponentElement, useEffect, useState } from "react";
import styled from "styled-components";
import Cursor from "./components/Cursor";
import Loading from "../../Components/Common/Loading";
import SwiperSection from "./components/SwiperSection";

//style
const Container = styled.main`
	height: ${window.innerHeight}px;
`;

const AboutSection = styled.article`
	min-height: 100vh;
`;

const WorkSection = styled.article`
	min-height: 100vh;
`;

export type positionType = "left" | "right" | "";

const Home = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [customCursor, SetCustomCursor] = useState<boolean>(false);
	const [currentPosition, setCurrentPosition] = useState<positionType>("");

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<Container>
			{loading && <Loading />}
			{customCursor && <Cursor currentPosition={currentPosition} />}
			<SwiperSection
				loading={loading}
				SetCustomCursor={SetCustomCursor}
				setCurrentPosition={setCurrentPosition}
			/>
			<AboutSection></AboutSection>
			<WorkSection></WorkSection>
		</Container>
	);
};

export default Home;
