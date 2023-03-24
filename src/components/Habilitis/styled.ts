import styled from "styled-components";
import Image from "next/image";

export const ContainerTotal = styled.div`
    height: 50%;
   
    display: flex;
    flex-direction: column;

    justify-content: center;
    @media screen and (max-width: 1550px) {
 
       height: 45%;
    }
`

export const AreaTitle = styled.div`
    
    
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 1550px) {
        height: 15%;
    
    }
`



export const ContainerHabilitis = styled.div`
  
    
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1550px) {
       height:  100%;
       
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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

    @media screen and (max-width: 1550px) {
        width: 20px;
        height: 20px;
        object-fit: contain;
      
    }
`

export const AreaTitleTech = styled.div`
    margin-left: 20px;
    
    height: 10%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1550px) {
        
        height: 12%;
    }
`

export const TitleTech = styled.h1`
    color: white;
    font-size: 20px;
    @media screen and (max-width: 1550px) {
       font-size: 15px;
       
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
       font-size: 12px;
    }
`

