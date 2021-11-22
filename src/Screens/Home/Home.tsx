import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cursor from "./components/Cursor";
import Loading from "../../Components/Common/Loading";
import SwiperSection from "./components/SwiperSection";
import WorkSection from "./components/WorkSection";
import Meta from "../../Components/Common/Helmet";

//style
const Container = styled.main`
	min-height: ${window.innerHeight}px;
`;

const AboutSection = styled.article`
	min-height: 100vh;
	background-color: ${(props) => props.theme.cream};
`;

const Section = styled.article`
	background-color: ${(props) => props.theme.white};
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
		}, 2000);
	}, []);

	return (
		<>
			<Meta data={{ title: "TH-ROAD | MAIN", description: "TH-ROAD Main", locale: "ko" }} />

			<Container>
				{loading && <Loading />}
				{customCursor && <Cursor currentPosition={currentPosition} />}
				<SwiperSection
					loading={loading}
					SetCustomCursor={SetCustomCursor}
					setCurrentPosition={setCurrentPosition}
				/>
				<AboutSection></AboutSection>
				<WorkSection />
				<Section></Section>
			</Container>
		</>
	);
};

export default Home;
