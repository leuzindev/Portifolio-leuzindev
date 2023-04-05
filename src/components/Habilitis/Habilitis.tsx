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

import python from "/public/images/python.png";
import react from "/public/images/react.png";
import database from "/public/images/database.png";
import docker from "/public/images/docker.png";
import figma from "/public/images/figma.png";
import {  Titles } from "@/styles/kitUI";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { SiNginx, SiDocker,SiFigma } from "react-icons/si";
import { DiPython, DiReact, DiDatabase } from "react-icons/di";
import { BiMobile } from "react-icons/bi"

import { HabitsMobileView } from "../Mobile/HabitsMobileView";

export function Habilitis() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // inicializa o estado com a largura atual da janela

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ContainerTotal id="hab">
      <AreaTitle>
        <Titles>Habilidades</Titles>
      </AreaTitle>

      {isMobile ? (
        <HabitsMobileView />
      ) : (
        <ContainerHabilitis>
          <ContentHabilitis>
        
            <HabilitisArea data-aos="fade-up" >
              <AreaTitleImg>
                <DiPython color="white"
                 size={30}/>
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Desenvolvimento Back End</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  NodeJS, Django, Express, Fastify, Flask, Nestjs, Graphql, Supabase
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
           
            <HabilitisArea  data-aos="fade-up">
              <AreaTitleImg>
                <DiReact color="white"
                 size={30}/>
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Desenvolvimento Front End</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  ReactJs, Nextjs, TailwindCSS, Styled Components, Figma
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
            <HabilitisArea  data-aos="fade-up">
              <AreaTitleImg>
                <BiMobile color="white"
                 size={25} />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Mobile</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>Expo, React-Native, NativeWind</SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
           
          </ContentHabilitis>
          <ContentHabilitis>
            <HabilitisArea  data-aos="fade-up">
              <AreaTitleImg>
                <SiNginx color="white" size={25} />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>DevOps</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  Deploy usando Vercel, Nginx e Gunicorn
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
            <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <SiDocker color="white"
                 size={30}/>
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Conteinerização</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  Configuração de aplicações back end e front end em ambiente
                  docker
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
             <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <DiDatabase color="white"
                 size={30} />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Banco de Dados</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  MySQL, Postgre, MongoDB, MariaDB, SQLserver
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>


          </ContentHabilitis>
        </ContainerHabilitis>
      )}
    </ContainerTotal>
  );
}
