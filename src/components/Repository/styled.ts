import styled from "styled-components";
import Image from "next/image";

export const ContainerRepositorys = styled.div`
  height: 60%;
  width: 100%;
  
  
`;



export const AreaTitleRepository = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  @media screen and (max-width: 1550px) {
      align-items: flex-end;
      height: 20%;
      margin-bottom: 10px;
  }

  
`;

export const AreaRespositorys = styled.div`
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1550px) {
      
        height: 80%;
    }
    
`;

export const RepositoryContainer = styled.a`
  background-color: #0e5464;
  height: 90%;
  width: 32%;
  transition: 1s all;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  &:hover{
    transition: 1s all;
    background-color: #11677A;
  }

`;
export const RepositoryRow = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1550px) {
       
        height: 55%;
        
    }
`;

export const RepositoryWhite = styled.div`
  background-color: white;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const RepositoryName = styled.p`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
  @media screen and (max-width: 1550px) {
    
    font-size: 15px;
}
`;

export const AreaRepositoryDescription = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
`;

export const RepositoryDescription = styled.p`
  color: white;
  font-size: 17px;
  @media screen and (max-width: 1550px) {
    
    font-size: 13px;
}
`;

export const AreaTech = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const TechRepoImg = styled(Image)`
  margin: 5px;
`;

export const GithubBar = styled.div`
  margin-top: 30px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GithubImgBar = styled(Image)`
  object-fit: cover;
  width: 116%;
  height: 116%;
  @media screen and (max-width: 1550px) {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 900px) {
       
  object-fit: cover;
    
  }
`

export const InfoStars = styled.span`
  font-weight: bold;
  color: white;
  @media screen and (max-width: 1550px) {
    
    font-size: 12px;
}
 
`


export const RepoContainerMobile = styled.div`

  height: 80%;


`


export const RepoMobile = styled.a`
  background-color: #0e5464;
  height: 70%;
  width: 100%;
  margin: 5px;
`

export const RepoMobileWhite = styled.div`
  background-color: white;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
`
export const NameRepo = styled.p`
  margin-left: 20px;
  font-weight: bold;
  color: black;
  font-size: 13px;
`

export const AreaSubRepo = styled.div`

  height: 40%;
  width: 90%;
  display: flex;
  align-items: center;
`

export const SubRepo = styled.p`
  color: white;
  font-size: 13px;
  margin-left: 20px;
  
`

export const AreaStars = styled.div`
  
  height: 30%;
  margin-left: 20px;
  display: flex;
  align-items: center;
`