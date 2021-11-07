import React, { ReactComponentElement, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";

import "swiper/swiper-bundle.css";

import SliderImg1 from "../../Assets/img/main-swiper-1.jpg";
import SliderImg2 from "../../Assets/img/main-swiper-2.jpg";
import SliderImg3 from "../../Assets/img/main-swiper-3.jpg";
import Cursor from "../../Components/Common/Cursor";
import { FadeIn, FadeInTopToBottom, FadeInZ } from "../../Styles/theme";

SwiperCore.use([Navigation, Pagination, EffectFade]);

//style
const Container = styled.main`
	min-height: 100vh;
`;

const SwiperWrap = styled.article`
	z-index: 150;
	& .swiper-container {
		width: 100%;
		height: 100%;
		cursor: none;
	}
	& .swiper-wrapper {
		padding-inline-start: 0;
	}
	& .swiper-button-prev {
		left: 0;
	}
	& .swiper-button-next {
		right: 0;
	}

	& .swiper-button-prev,
	.swiper-button-next {
		top: 0;
		width: 50%;
		height: 100%;
		cursor: none;
	}

	& .swiper-button-prev:after,
	.swiper-button-next:after {
		opacity: 0;
		cursor: none;
	}

	& .swiper-pagination-bullet {
		width: 10px;
		height: 10px;
		background-color: #fff;
	}
	& .swiper-pagination-bullet-active {
		width: 12px;
		height: 12px;
	}
`;

const SwiperInner = styled.div<{ bg: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: url(${(props) => props.bg}) no-repeat;
	background-size: cover;
	animation-name: ${FadeInZ};
	animation-duration: 1s;
	color: ${(props) => props.theme.white};
	img {
		width: 100%;
	}
`;

const MainText = styled.p`
	position: relative;
	display: flex;
	font-weight: 700;
	font-size: ${(props) => props.theme.fontSizeXXXL};
	line-height: 1.5em;
	margin-bottom: 20px;
	animation-name: ${FadeIn};
	animation-duration: 1s;
`;

const AnimationSpan = styled.span<{ delay: number }>`
	position: relative;
	top: 0px;
	display: block;
	animation-name: ${FadeInTopToBottom};
	animation-duration: 0.7s;
	animation-delay: ${(props) => {
		console.log(props.delay);
		return `${props.delay / 15}s`;
	}};
`;

const SubText = styled.p`
	font-size: ${(props) => props.theme.fontSizeXL};
	animation-name: ${FadeIn};
	animation-duration: 1s;
`;

const AboutSection = styled.article`
	min-height: 100vh;
`;

const Home = () => {
	const [customCursor, SetCustomCursor] = useState<boolean>(false);
	const [currentPosition, setCurrentPosition] = useState<"left" | "right" | "">(
		""
	);
	type SwiperArrTypes = {
		src: string;
		alt: string;
		mainText: string;
		subText: string;
	};
	const swiperArr: Array<SwiperArrTypes> = [
		{
			src: SliderImg1,
			alt: "배너이미지",
			mainText: "Iconic by design",
			subText:
				"Every detail adds to the iconic Cowboy look for a new performeace standard",
		},
		{
			src: SliderImg2,
			alt: "배너이미지",
			mainText: "Iconic by design",
			subText:
				"Every detail adds to the iconic Cowboy look for a new performeace standard",
		},
		{
			src: SliderImg3,
			alt: "배너이미지",
			mainText: "Iconic by design",
			subText:
				"Every detail adds to the iconic Cowboy look for a new performeace standard",
		},
	];

	const makeTextAnimation = (text: string | null) => {
		const splitText = text?.split("");
		return splitText?.map((item, index) => {
			return (
				<AnimationSpan key={index} delay={index}>
					{item}
				</AnimationSpan>
			);
		});
	};

	const mouserOverSwiper: Function = (e: MouseEvent) => {
		SetCustomCursor(true);

		if (window.innerWidth - e.clientX > window.innerWidth / 2) {
			setCurrentPosition("left");
		} else {
			setCurrentPosition("right");
		}
	};

	return (
		<Container>
			{customCursor && <Cursor currentPosition={currentPosition} />}
			<SwiperWrap
				onMouseMove={(e) => mouserOverSwiper(e)}
				onMouseOut={() => SetCustomCursor(false)}
			>
				<Swiper navigation pagination={{ clickable: true }} loop effect="fade">
					{swiperArr.map((item, index) => (
						<SwiperSlide key={index}>
							{({ isActive }) => (
								<SwiperInner bg={item.src}>
									{isActive && (
										<>
											<MainText>{makeTextAnimation(item.mainText)}</MainText>
											<SubText>{item.subText}</SubText>
										</>
									)}
								</SwiperInner>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperWrap>
			<AboutSection></AboutSection>
		</Container>
	);
};

export default Home;
