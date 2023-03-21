import styled from "styled-components";
import Image from "next/image";

export const ContainerTotal = styled.div`
    height: 50%;
   
    display: flex;
    flex-direction: column;

    justify-content: center;
    
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
`
export const ContentHabilitis = styled.div`
    
     width: 100%;
     height: 40%;
     margin: 10px;
     display: flex;
     justify-content: space-between;
     align-items: center;
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
`

