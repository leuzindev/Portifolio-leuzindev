import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


export const ContainerProjects = styled.div`
    margin-bottom: 20px;
    height: 43%;
    @media screen and (max-width: 1550px) {
        height: 43%;
      
        
        
    }
   
`



export const TitleSeeMore = styled.div`
   height: 15%;
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   @media screen and (max-width: 1550px) {
        
        
    }
`
export const AreaProjects = styled.div`
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1550px) {
        height: 90%;
    }
    @media screen and (max-width: 900px) {
    
       flex-direction: column;
        width: 100%;
        
    }
   
`

export const Project = styled.div`
    background-color: #0E5464;
    width: 32%;
    height: 90%;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 40%;
        
    }
`

export const AreaImg = styled.div`
    height: 60%;
`

export const AreaNameTech = styled.div`
    background-color: white;
    height: 20%;
    display: flex;
    align-items: center;
`

export const AreaImgTech = styled.div`
    background-color: #0E5464;
    height: 20%;
    display: flex;
    align-items: center;
    margin-left: 30px;
`

export const NameProject = styled.p`
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-left: 30px;
    @media screen and (max-width: 1550px) {
        font-size: 15px;
    }
`

export const ProjectImg = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100%;
  
`

export const TechsProjectsImgs = styled(Image)`
    margin: 10px;
    
`

export const AreaProjectsMobile = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  
`

export const SliderContent = styled(SwiperSlide)`
       
    height: 100%;
    
`

export const AreaProjectMobile = styled.div`
    height: 100%;
    background-color: #0E5464;
`

export const AreaImgMobile = styled.div`
    height: 80%;

`

export const AreaTitleProject = styled.div`
    height: 20%;
    background-color: white;
    display: flex;
    align-items: center;
`

export const TitleProject = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 15px;
    margin-left: 20px;
`

export const ImgProject = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;

`