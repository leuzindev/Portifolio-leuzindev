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
  @media screen and (max-width: 1550px) {
    
   
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
  background-color: grey;
  height: 50%;
`;

export const InfoStars = styled.span`
  font-weight: bold;
  color: white;
  @media screen and (max-width: 1550px) {
    
    font-size: 12px;
}
 
`