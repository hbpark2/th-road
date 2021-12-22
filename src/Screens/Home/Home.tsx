import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cursor from "./components/Cursor";
import Loading from "../../Components/Common/Loading";
import SwiperSection from "./components/SwiperSection";
import WorkSection from "./components/WorkSection";
import Meta from "../../Components/Common/Helmet";
import Portrait from "../../Assets/img/portrait.jpg";

//style
const Container = styled.main`
  min-height: ${window.innerHeight}px;
`;

const AboutSection = styled.article`
  padding: 150px 0 50px;
  min-height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 14%,
    rgba(37, 40, 37, 1) 74%
  );
  color: #fff;
`;

const AboutInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const TextSection = styled.div`
  p {
    font-size: 42px;
    text-align: center;
    margin: 30px auto;
    font-weight: 300;
  }
  p:last-child {
    font-size: 32px;
  }
`;

const THRoadText = styled.span`
  display: block;
  margin: 50px auto 100px;
  padding: 15px 20px;
  text-align: center;
  width: 250px;
  font-size: 52px;
  border: 2px solid #fff;
  border-radius: 50px;
`;

const PictureSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px auto 100px;
  img {
    width: 40%;
    margin-right: 5%;
  }
`;

const CareerSection = styled.ul`
  font-size: 22px;
  .weak-font {
    opacity: 0.7;
  }
  li {
    margin-bottom: 30px;
    p {
      margin: 10px 0;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 26px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 1.4em;
  font-weight: 300;
  padding-bottom: 100px;
  .title,
  strong {
    font-weight: 700;
  }
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
      <Meta
        data={{
          title: "TH-ROAD ",
          description: "TH-ROAD's portfolio",
          locale: "ko",
        }}
      />

      <Container>
        {loading && <Loading />}
        {customCursor && <Cursor currentPosition={currentPosition} />}
        <SwiperSection
          loading={loading}
          SetCustomCursor={SetCustomCursor}
          setCurrentPosition={setCurrentPosition}
        />
        <AboutSection>
          <AboutInner>
            <TextSection>
              <THRoadText>TH-Road</THRoadText>
              <p>To find the value beyond the design</p>
              <p>디자인 그 이상의 가치를 찾습니다.</p>
            </TextSection>
            <PictureSection>
              <img src={Portrait} alt="프로필 이미지" />
              <CareerSection>
                <li>
                  <Title>
                    <span className="name">유새길</span>
                    &nbsp;
                    <span className="name">James Yu</span>
                  </Title>
                  <span className="weak-font">
                    ProductManager / Product Development MD / Designer
                  </span>
                </li>
                <li>
                  <Title>Career</Title>
                  <p className="weak-font">
                    2017.01 - Imm Colonge 2017 참가 (Pure Talent 부문)
                  </p>
                  <p className="weak-font">
                    2017.01 - Imm Colonge 2017 참가 (Pure Talent 부문)
                  </p>
                </li>
              </CareerSection>
            </PictureSection>
            <Paragraph>
              <span className="title">TH-Road는,</span>
              <br />
              <br />
              수용적이고 적극적인 디자이너입니다.
              <br />
              모든 프로젝트에 소통없는 디자인은 없습니다. <br />
              트렌드와, 고객 니즈와, 팀원들과 <br />
              <strong>소통을 가장 중요 시하는 디자이너</strong>입니다.
            </Paragraph>
          </AboutInner>
        </AboutSection>
        <WorkSection />
        <Section></Section>
      </Container>
    </>
  );
};

export default Home;
