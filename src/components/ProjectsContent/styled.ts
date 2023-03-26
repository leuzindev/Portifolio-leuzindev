import Image from "next/image";
import styled from "styled-components";



export const BgContainer = styled.div`
   
    height: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
    @media screen and (max-width: 1550px) {
       
    }
   

`

export const AreaTitle = styled.div`
    
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    
    

`


export const ProjectContainer = styled.div`
    background-color: #0E5464;
    height: 30%;
    width: 30%;
    margin: 20px;
    transition: 1s all;
    @media screen and (max-width: 1550px) {
       margin: 10px;
    }
    @media screen and (max-width: 900px) {
      margin: 5px;
    
    }
    &:hover{
      transition: 1s all;
      background-color: #136578;
   }


`

export const AreaImg = styled.div`
   
    

`

export const ProjectImg = styled(Image)`
   object-fit: cover;
   object-position: center 20%;
   width: 100%;
   height: 100%;
   
    

`
export const AreaProjectName = styled.div`
   background-color: white;
   width: 100%;
   height: 20%;
   display: flex;
   align-items: center;
   

`
export const TechName = styled.p`
   color: black;
   font-weight: bold;
   font-size: 15px;
    margin-left: 20px;
    @media screen and (max-width: 1550px) {
       font-size: 15px;
    }
    @media screen and (max-width: 900px) {
      font-size: 10px;
    
    }

`


export const AreaProjectTech = styled.div`
   width: 100%;
    margin-left: 20px;
   height: 20%;
   display: flex;
   align-items: center;
   gap: 10px;
    
`






