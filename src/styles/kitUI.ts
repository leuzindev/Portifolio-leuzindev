import styled from "styled-components";

export const Tela = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #145277, #83D0CB);
 

`;

export const TelaSecond = styled.div`
  max-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #145277, #83D0CB);

`;

export const Container = styled.div`
  height: 100%;
  width: 80%;
  @media screen and (min-width: 1921px) {
    width: 40%;
  }
`;


export const LineWhite = styled.hr`
  color: white;
`

export const Titles = styled.h1`
    color: white;
    font-weight: bold;
`

export const SeeMore = styled.a`
    color: white;
    font-weight: 600;
    cursor: pointer;
`

export const Footer = styled.div`
  background-color: white;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const InfoFooter = styled.p`
  margin-bottom: 10px;
`

export const Sub = styled.span`
  text-decoration: underline
`