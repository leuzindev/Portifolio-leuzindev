import styled from "styled-components";


export const ContainerHead = styled.div`
    
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

`

export const AreaLinks = styled.div`
    
    width: 35%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Links = styled.a`
    margin: 10px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 13pt;
    transition: 1s all;
    &:hover{
        color: #0E5464;
    }
`
export const LinkButton = styled(Links)`
    cursor: pointer;
    background-color:rgba(255, 255, 255, 0.58);
    border-radius: 2px;
    color: black;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    &:hover{
        background-color: #0E5464;
        color: white;
    }
    
`