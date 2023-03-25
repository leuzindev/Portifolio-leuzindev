import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   
    width: 100%;
    height: 100%;
    @media screen and (max-width: 900px) {
     
       flex-direction: column;
        
    }
`

export const LeftFooter = styled.div`
    
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 900px) {
       
        width: 100%;
    
    }
  
`

export const RightFooter = styled.div`
    
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 900px) {
       display: none;
    
    }
`

export const TitleContato = styled.h1`
    color: black;
    font-size: 30pt;
    margin-bottom: 30px;
    @media screen and (max-width: 1550px) {
        font-size: 25px;
        
    }
`

export const DesContato = styled.p`
    color: black;
    text-decoration: underline;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    @media screen and (max-width: 1550px) {
     
        font-size: 14px;
        
    }
`

export const ImgLabel = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 1550px) {
        
        width: 33%;
       
    }
    @media screen and (max-width: 900px) {
       
        align-items: center;
        justify-content: center;
        width: 100%;
    
    }
    width: 30%;
    margin-top: 10px;

`

export const AreaNomeeEmail = styled.div`
    height: 15%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1550px) {
      
        height: 35%;
        
    }
    @media screen and (max-width: 900px) {
       
       
    
    }
`

export const InputPrimary = styled.input`
    padding-left: 10px;
    margin: 5px;
    height: 40px;
    width: 42%;
    border: none;
    border-bottom: 2px solid #838383;
    &::placeholder{
        color: #616161;
        font-weight: bold;
    }

`
export const AreaMessage = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    
`

export const InputMessage = styled.textarea`
    margin: 5px;
    width: 86%;
    height: 90%;
    padding-left: 10px;
    padding-top: 10px;
    border: none;
    background-color: #E2E2E2;
    
`

export const AreaButton = styled.div`
    
    width: 60%;
    display: flex;
    height: 15%;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 1550px) {
       height: 25%;
        
    }
`

export const ButtonSend = styled.button`
    border: none;
    outline: none;
    color: white;
    background-color: black;
    height: 40px;
    width: 100px;
    cursor: pointer;
    @media screen and (max-width: 1550px) {
        height: 30px;
        
    }
`