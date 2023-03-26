import {
  AreaImg,
 
 
} from "../Projects/styled";
import {
  AreaProjectName,
  AreaProjectTech,
  AreaTitle,
  BgContainer,
  ProjectContainer,
  TechName,
  ProjectImg,
} from "./styled";

import cine from "/public/images/cover_cine.png";
import pure from "/public/images/cover_pure.png";
import habits from "/public/images/cover_habits.png";
import hzc from "/public/images/cover_hzc.png";
import connect from "/public/images/cover_connect.png";
import lorem from "/public/images/cover_lorem.png";
import { Titles } from "@/styles/kitUI";

import {  DiPython } from "react-icons/di";
import { SiCss3, SiDjango, SiFigma, SiHtml5, SiPrisma, SiReact } from "react-icons/si";
import {FaNodeJs} from "react-icons/fa"

export function ProjectsContent() {

  


  return (
    <BgContainer>
      <AreaTitle>
        <Titles>Projetos</Titles>
      </AreaTitle>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="https://github.com/leuzindev/Cineflow">

          <ProjectImg src={cine} alt="imagem do projeto" />
        </a>
        </AreaImg>
        <AreaProjectName>
            <TechName>CineFlow - Aplicativo de Streaming</TechName>
        </AreaProjectName>
        <AreaProjectTech>
            <SiReact 
                color="white"
                size={25}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <SiDjango 
              color="white"
              size={20}
              spacing={10}
            />
            <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="">
          <ProjectImg src={pure} alt="imagem do projeto" />

        </a>
        </AreaImg>
        <AreaProjectName>
        <TechName>Pure Power - Aplicativo de academia</TechName>
        </AreaProjectName>
        <AreaProjectTech>
            <SiReact 
                color="white"
                size={25}
                spacing={10}
            />
            <SiDjango 
              color="white"
              size={20}
              spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="https://github.com/leuzindev/Habits-Nlw-Frontend">

          <ProjectImg src={habits} alt="imagem do projeto" />
        </a>
        </AreaImg>
        <AreaProjectName>
        <TechName>Habits - Sites e app de hábitos</TechName>
        </AreaProjectName>
        <AreaProjectTech>
          <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <SiReact 
                color="white"
                size={25}
                spacing={10}
            />
            <SiDjango 
              color="white"
              size={20}
              spacing={10}
            />
            <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
            <FaNodeJs
               color="white"
               size={20}
               spacing={10}
            />
            <SiPrisma 
               color="white"
               size={20}
               spacing={10}
            />
            
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="https://github.com/leuzindev/HZC_app">

          <ProjectImg src={hzc} alt="imagem do projeto" />
        </a>
        </AreaImg>
        <AreaProjectName>
        <TechName>Hzc - Skate Board</TechName>
        </AreaProjectName>
        <AreaProjectTech>
          <SiHtml5
            color="white"
            size={20}
            spacing={10}
          />
          <SiCss3 
            color="white"
            size={20}
            
          />
          <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="https://github.com/leuzindev/CONNECT_BANK">

          <ProjectImg src={connect} alt="imagem do projeto" />
        </a>
        </AreaImg>
        <AreaProjectName>
        <TechName>Connect bank - Banco digital</TechName>
        </AreaProjectName>
        <AreaProjectTech>
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            
            <SiReact
              color="white"
              size={25}
              spacing={10}
            />
             <SiDjango 
              color="white"
              size={20}
              spacing={10}
            />
            <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-up">
        <AreaImg>
        <a href="https://github.com/leuzindev/LOREM_BARBER">

          <ProjectImg src={lorem} alt="imagem do projeto" />
        </a>
        </AreaImg>
        <AreaProjectName>
        <TechName>Lorem barber - Site barbearia</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <SiReact 
                color="white"
                size={25}
                spacing={10}
            />
           
            <SiFigma
              color="white"
              size={20}
              spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
     
     
    </BgContainer>
  );
}
