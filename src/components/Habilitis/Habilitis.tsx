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

import { SiNginx } from "react-icons/si";

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
            <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <TechImg src={python} alt="" />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Desenvolvimento Back End</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  NodeJS, Django, Express, MySQL, SQLite, MongoDB e AJAX{" "}
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
            <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <TechImg src={react} alt="" />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Desenvolvimento Front End</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  ReactJs, React-Native, TailwindCSS, Styled Components
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
            <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <TechImg src={database} alt="" />
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
          <ContentHabilitis>
            <HabilitisArea data-aos="fade-up">
              <AreaTitleImg>
                <SiNginx color="white" size={30} />
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
                <TechImg src={docker} alt="" />
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
                <TechImg src={figma} alt="" />
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
      )}
    </ContainerTotal>
  );
}
