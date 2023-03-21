import styled from "styled-components";
import Image from "next/image";

export const AreaAboutMeContainer = styled.div`
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`

export const LeftCard = styled.div`
    width: 50%;
    height: 40%;
  
    

`
export const RightCard = styled.div`
   
    height: 40%;
  
    display: flex;
    align-items: center;
    justify-content: center;


`

export const MeImage = styled(Image)`
    border-radius: 5px;
    

`

export const AreaTitle = styled.div`
    
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const AreaSub = styled.div`

    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleMe = styled.h1`
    color: white;
    font-weight: bold;

`

export const TitleMeColor = styled.span`
    color: #0E5464;
    font-weight: bold;

`

export const Subtitle = styled.p`
    color: white;
    font-weight: 400;
    font-size: 17px;

`

export const SubtitleColor = styled.span`
    color: #0E5464;
    text-decoration: underline;
    font-weight: 400;
    font-size: 17px;
`

export const AreaCV = styled.div`
    height: 20%;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const ButtonCv = styled.button`
    border: none;
    outline: none;
    color: white;
    background-color: #0E5464;
    border-radius: 4px;
    height: 60%;
    width: 150px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
`