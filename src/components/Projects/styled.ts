import styled from "styled-components";
import Image from "next/image";


export const ContainerProjects = styled.div`
    margin-bottom: 20px;
    height: 43%;
`



export const TitleSeeMore = styled.div`
   height: 15%;
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
`
export const AreaProjects = styled.div`
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`

export const Project = styled.div`
    background-color: #0E5464;
    width: 32%;
    height: 90%;
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
`

export const ProjectImg = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const TechsProjectsImgs = styled(Image)`
    margin: 10px;
`