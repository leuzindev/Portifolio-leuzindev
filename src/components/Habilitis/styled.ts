import styled from "styled-components";
import Image from "next/image";

export const ContainerTotal = styled.div`
    height: 50%;
   
    display: flex;
    flex-direction: column;

    justify-content: center;
    @media screen and (max-width: 1550px) {
       
       height: 70%;
    }
`

export const AreaTitle = styled.div`
    
  
    display: flex;
    align-items: flex-end;
`



export const ContainerHabilitis = styled.div`
  
    
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1550px) {
       height:  80%;
    }
    
`
export const ContentHabilitis = styled.div`
    
     width: 100%;
     height: 40%;
     margin: 10px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     @media screen and (max-width: 1550px) {
       height: 50%;
    }
     
`

export const HabilitisArea = styled.div`

    background-color: #0E5464;
    width: 32%;
    height: 100%;
    
`

export const AreaTitleImg = styled.div`
    
    height: 35%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    @media screen and (max-width: 1550px) {
        height: 40%;
    }
`
export const TechImg = styled(Image)`

`

export const AreaTitleTech = styled.div`
    margin-left: 20px;
    
    height: 10%;
    display: flex;
    align-items: center;
`

export const TitleTech = styled.h1`
    color: white;
    font-size: 20px;
    @media screen and (max-width: 1550px) {
       font-size: 18px;
    }
`

export const AreaSubTech = styled.div`
  
    width: 90%;
    margin-left: 20px;
    height: 40%;
    display: flex;
    align-items: center;
`

export const SubTitleTech = styled.p`
    color: white;
    font-size: 19px;
    font-weight: 400;
    @media screen and (max-width: 1550px) {
       font-size: 16px;
    }
`

