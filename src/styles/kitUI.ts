import styled from "styled-components";

export const Tela = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #145277, #83D0CB);
  @media screen and (max-width: 1550px) {
        height: 100vh;
        
    }
    @media screen and (max-width: 900px) {
        max-height: 100vh;
    
    }
    

`;

export const TelaSecond = styled.div`
  height: 150vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #145277, #83D0CB);
  @media screen and (max-width: 1550px) {
       height: 190vh;
      }

      
  
`;

export const Container = styled.div`
  height: 100%;
  width: 80%;
  @media screen and (max-width: 900px) {
       width: 90%;
    }
  @media screen and (min-width: 1000px) {
    width: 65%;
   
  }
  @media screen and (min-width: 3000px) {
    width: 40%;
  }
`;

export const ContainarRepo = styled(Container)`
  @media screen and (max-width: 1550px) {
       height: 140vh;
      }

`

export const ContainerCertificates = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #145277, #83D0CB);
 
`;


export const LineWhite = styled.hr`
  color: white;
`

export const LineWhiteSpace = styled(LineWhite)`
  @media screen and (max-width: 1550px) {
      margin-top: 20px;
    }
  
`

export const Titles = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 30px;
     @media screen and (max-width: 1550px) {
        font-size: 20px;
    }
`
export const TitlesRepo = styled(Titles)`
  margin-top:10px;
  @media screen and (max-width: 1550px) {
    margin-top:0px;
    }
`

export const SeeMore = styled.a`
    color: white;
    font-weight: 600;
    cursor: pointer;
    @media screen and (max-width: 1550px) {
        font-size: 12px;
    }
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
  @media screen and (max-width: 1550px) {
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
      font-size: 10px;
    
    }
`

export const Sub = styled.span`
  text-decoration: underline
`