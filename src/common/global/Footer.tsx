import React from "react";
import styled from "styled-components";
import AppleApp from "../AppleApp";
import GoogleApp from "../GoogleApp";

export const Section = styled.div`
  position: relative;
  height: 900px;
  overflow: hidden;
  transition: ease all 0.5s;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 834px;
  }
  @media screen and (max-width: 870px) {
    height: 934px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 960px;
  }
`;

export const Row = styled.div<{ mt?: number }>`
  width: 80%;
  margin: 0 auto;
  margin-top: ${({ mt }) => (mt ? mt + "px" : 0 + "px")};
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: ${({ mt }) => (mt ? mt / 2 + "px" : 0 + "px")};
  }
`;

export const TextBox = styled.div`
  margin-left: 10%;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
  }
`;

export const HeadLine3B = styled.h3`
  font-weight: bold;
  font-size: 44px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 240px;
    text-align: center;
  }
`;

export const HeadLine3 = styled.h3`
  font-size: 44px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`;

export const AppLinkBox = styled.div`
  display: flex;
  gap: 34px;
  margin: 36px auto 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 14px;
  }
`;

export const BlueBox = styled.div`
  background-color: ${(props) => props.theme.colors.point};
`;

export const Box = styled.div`
  height: 450px;
  width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 50px;
  }
  @media screen and (max-width: 870px) {
    flex-direction: column;
    height: 550px;
    padding: 34px 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 34px 0 38px;
    height: 580px;
  }
`;

export const InfoBox = styled.div`
  color: ${(props) => props.theme.colors.subGray};
  margin-top: 44px;
  font-size: 19px;
  line-height: 1.5;
  @media screen and (max-width: 870px) {
    font-size: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    width: 220px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

const Footer = () => {
  return (
    <Section>
      <Row mt={100}>
        <TextBox>
          <HeadLine3>뱅카우로</HeadLine3>
          <HeadLine3B>한우 투자하러 가볼까요?</HeadLine3B>
          <AppLinkBox>
            <GoogleApp />
            <AppleApp />
          </AppLinkBox>
        </TextBox>
      </Row>
      <BlueBox>
        <Box>
          <div>
            <img src="companylogo.png" alt="company logo" />
            <InfoBox>
              주소 서울특별시 마포구 마포대로 122, 12층 14층 (우. 04213)
              <br />
              사업자등록번호 574-81-01983
              <br />
              통신판매업신고번호 2020-서울중구-3078호
              <br />
              대표자 안재현
              <br />
              고객센터 support@stockeeper.co, 02-2274-2517
              <br />
              제휴 및 대외협력 bancow_official@naver.com
            </InfoBox>
          </div>
          <Col>
            <InfoBox>Follow Us On:</InfoBox>
            <FlexBox>
              <a
                href="https://www.youtube.com/channel/UCATOmelT_aoRb484L3DU-DQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkicons/youtube.png"
                  alt="youtube link"
                  width={40}
                />
              </a>
              <a
                href="https://www.instagram.com/bancow_official/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkicons/instagram.png"
                  alt="instagram link"
                  style={{ backgroundColor: "white", borderRadius: "9px" }}
                  width={40}
                />
              </a>
              <a
                href="http://pf.kakao.com/_dzLCs/chat"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkicons/kakaotalk.png"
                  alt="kakaotalk link"
                  style={{ borderRadius: "9px" }}
                  width={40}
                />
              </a>
              <a
                href="https://blog.naver.com/bancow_official"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkicons/naverblog.png"
                  alt="naverblog link"
                  width={40}
                />
              </a>
            </FlexBox>
            <InfoBox>
              Copyright © 2022
              <br />
              stockeeper Co., Ltd.
            </InfoBox>
          </Col>
        </Box>
      </BlueBox>
    </Section>
  );
};

export default Footer;
