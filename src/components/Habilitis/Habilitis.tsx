import {
    AreaSubTech,
  AreaTitle,
  AreaTitleImg,
  AreaTitleTech,
  ContainerHabilitis,
  ContainerTotal,
  ContentHabilitis,
  HabilitisArea,
  SubTitleTech,
  TechImg,
  TitleTech,
} from "./styled";

import python from '/public/images/python.png'
import react from '/public/images/react.png'
import database from '/public/images/database.png'
import git from '/public/images/git.png'
import docker from '/public/images/docker.png'
import figma from '/public/images/figma.png'
import { LineWhite, Titles } from "@/styles/kitUI";



export function Habilitis() {

  
  return (
    <ContainerTotal id="hab">
      <AreaTitle>
        <Titles>Habilidades</Titles>
      </AreaTitle>
      <ContainerHabilitis>
        <ContentHabilitis>
          <HabilitisArea data-aos="fade-up">
            <AreaTitleImg>
              <TechImg src={python} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Desenvolvimento Back End</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>NodeJS, Django, Express, MySQL, SQLite, MongoDB e AJAX </SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
          <HabilitisArea data-aos="fade-up">
          <AreaTitleImg>
              <TechImg src={react} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Desenvolvimento Front End</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>ReactJs, React-Native, TailwindCSS, Styled Components</SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
          <HabilitisArea data-aos="fade-up">
          <AreaTitleImg>
              <TechImg src={database} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Banco de Dados</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>MySQL, Postgre, MongoDB, MariaDB, SQLserver</SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
        </ContentHabilitis>
        <ContentHabilitis>
          <HabilitisArea data-aos="fade-up">
          <AreaTitleImg>
              <TechImg src={git} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Controle de Versão Git</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>Versionamento de código utilizando Github ou GitLab</SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
          <HabilitisArea data-aos="fade-up">
          <AreaTitleImg>
              <TechImg src={docker} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Conteinerização</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>Configuração de aplicações back end e front end em ambiente docker</SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
          <HabilitisArea data-aos="fade-up">
          <AreaTitleImg>
              <TechImg src={figma} alt=""/>
            </AreaTitleImg>
            <AreaTitleTech>
              <TitleTech>Design de Aplicação</TitleTech>
            </AreaTitleTech>
            <AreaSubTech>
                <SubTitleTech>Figma, Photoshop</SubTitleTech>
            </AreaSubTech>
          </HabilitisArea>
        </ContentHabilitis>
      </ContainerHabilitis>
     
    </ContainerTotal>
  );
}
