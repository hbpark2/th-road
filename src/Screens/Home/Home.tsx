import React, { ReactComponentElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";

import "swiper/swiper-bundle.css";

import SliderImg1 from "../../Assets/img/main-swiper-1.jpg";
import SliderImg2 from "../../Assets/img/main-swiper-2.jpg";
import SliderImg3 from "../../Assets/img/main-swiper-3.jpg";
import Cursor from "../../Components/Common/Cursor";
import { FadeIn, FadeInTopToBottom, FadeInZ } from "../../Styles/animation";
import Loading from "../../Components/Common/Loading";

SwiperCore.use([Navigation, Pagination, EffectFade]);

//style
const Container = styled.main`
	height: ${window.innerHeight}px;
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

const SwiperInner = styled.div<{ bg: string; isActive: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${window.innerHeight}px;
	background: url(${({ bg }) => bg}) no-repeat;
	background-size: cover;
	animation-name: ${({ isActive }) => isActive && FadeInZ};
	animation-duration: 2s;
	animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
	color: ${({ theme }) => theme.white};
	img {
		width: 100%;
	}
	@media ${({ theme }) => theme.deviceScreen.laptop} {
		background-size: cover;
		background-position: center center;
	}
`;

const MainText = styled.p`
	position: relative;
	display: flex;
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSizeXXXL};
	line-height: 1.5em;
	margin-bottom: 20px;
	animation-name: ${FadeIn};
	animation-duration: 1s;
	@media ${({ theme }) => theme.deviceScreen.laptop} {
		font-size: 34px;
	}
`;

const AnimationSpan = styled.span<{ delay: number }>`
	position: relative;
	top: 0px;
	display: block;
	min-width: 0.2em;
	animation-name: ${FadeInTopToBottom};
	animation-duration: 0.7s;
	animation-delay: ${({ delay }) => {
		return `${delay / 15}s`;
	}};
	animation-fill-mode: both;
	opacity: 0;
`;

const SubText = styled.p`
	font-size: ${({ theme }) => theme.fontSizeXL};
	text-align: center;
	animation-name: ${FadeIn};
	animation-duration: 2s;
	animation-delay: 1s;
	animation-fill-mode: both;
	opacity: 0;

	@media ${({ theme }) => theme.deviceScreen.laptop} {
		padding: 0 10px;
		line-height: 1.4em;
		font-size: ${({ theme }) => theme.fontSizeL};
		text-align: center;
	}
`;

const AboutSection = styled.article`
	min-height: 100vh;
`;

const Home = () => {
	const [loading, setLoading] = useState<boolean>(true);
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

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<Container>
			{loading && <Loading />}
			{customCursor && <Cursor currentPosition={currentPosition} />}
			<SwiperWrap
				onMouseMove={(e) => mouserOverSwiper(e)}
				onMouseOut={() => SetCustomCursor(false)}
			>
				<Swiper
					navigation
					pagination={{ clickable: true }}
					loop
					effect="fade"
					speed={1000}
					fadeEffect={{ crossFade: true }}
				>
					{swiperArr.map((item, index) => (
						<SwiperSlide key={index}>
							{({ isActive }) => (
								<SwiperInner bg={item.src} isActive={isActive && !loading}>
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
