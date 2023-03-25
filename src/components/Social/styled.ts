import styled from "styled-components";
import Image from "next/image";


export const ContainerSocial = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 5%;
    flex-wrap: wrap;
    @media screen and (max-width: 900px) {
       
     
       
    }
    
`

export const AreaImgLabel = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 8%;
    height: 30%;
    cursor: pointer;
    @media screen and (max-width: 1550px) {
        width: 15%;

        
    }
    
`


export const SocialIcons = styled(Image)`
    @media screen and (max-width: 900px) {
       width: 90%;
       height: 90%;
       object-fit: contain;
    }
`

export const LabelSocial = styled.a`
    color: white;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 900px) {
       font-size: 10px;
       margin-left: 3px;
    }
`




