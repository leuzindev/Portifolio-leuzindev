import styled from "styled-components";
import Image from "next/image";


export const ContainerSocial = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 5%;
    flex-wrap: wrap;
    
`

export const AreaImgLabel = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 8%;
    height: 30%;
    cursor: pointer;
    @media screen and (max-width: 1550px) {
        width: 10%;
    }
`


export const SocialIcons = styled(Image)`
    
`

export const LabelSocial = styled.a`
    color: white;
    font-size: 16px;
    font-weight: 400;
`




