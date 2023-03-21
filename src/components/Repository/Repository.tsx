import { SeeMore, Titles } from "@/styles/kitUI";
import react from "react";
import {
  AreaRepositoryDescription,
  AreaRespositorys,
  AreaTech,
  AreaTitleRepository,
  ContainerRepositorys,
  GithubBar,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryName,
  RepositoryRow,
  RepositoryWhite,
  TechRepoImg,
} from "./styled";

import icoPython from "/public/images/icoPython.png";
import icoReact from "/public/images/icoReact.png";
import icoDocker from "/public/images/icoDocker.png";
import { Footer } from "../Footer/Footer";


export function Repository() {
  return (
    <ContainerRepositorys>
      <AreaTitleRepository>
        <Titles>Repositórios</Titles>
        <SeeMore>Ver mais</SeeMore>
      </AreaTitleRepository>
      <AreaRespositorys>
        <RepositoryRow>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
              <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
              <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
                <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
                <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
        </RepositoryRow>
        <RepositoryRow>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
                <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
                <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer>
            <RepositoryWhite>
              <RepositoryName>Cine flow - Mobile Application</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
                <TechRepoImg src={icoPython} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoReact} alt="icone das tecnologias usadas no repositorio"/>
                <TechRepoImg src={icoDocker} alt="icone das tecnologias usadas no repositorio"/>
            </AreaTech>
          </RepositoryContainer>
        </RepositoryRow>
      </AreaRespositorys>
      <GithubBar>
        
      </GithubBar>
     
    </ContainerRepositorys>
  );
}
