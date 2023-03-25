import styled from "styled-components";
import Image from "next/image";

export const AreaAboutMeContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftCard = styled.div`
  width: 50%;
  height: 40%;
  @media screen and (max-width: 1550px) {
    height: 50%;

    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;

    height: 60%;
  }
`;
export const RightCard = styled.div`
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1550px) {
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MeImage = styled(Image)`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 1550px) {
    height: 150%;
  }
`;

export const AreaTitle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const AreaSub = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1550px) {
    height: 60%;
  }
  @media screen and (max-width: 900px) {
      margin-top: 10px;
    }
`;

export const TitleMe = styled.h1`
  color: white;
  font-weight: bold;
  @media screen and (max-width: 1550px) {
    font-size: 30px;
  }
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const TitleMeColor = styled.span`
  color: #0e5464;
  font-weight: bold;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  color: white;
  font-weight: 400;
  font-size: 17px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const SubtitleColor = styled.span`
  color: #0e5464;
  text-decoration: underline;
  font-weight: 400;
  font-size: 17px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const AreaCV = styled.div`
  height: 20%;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1550px) {
    width: 93%;
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const ButtonCv = styled.a`
  border: none;
  outline: none;
  color: white;
  background-color: #0e5464;
  border-radius: 4px;
  height: 60%;
  width: 150px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1550px) {
    height: 80%;
    width: 130px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
    width: 100%;
  }
`;
