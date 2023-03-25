import {
  AreaImgTechMobile,
  AreaSubTech,
  AreaSubTitleTechMobile,
  AreaTitle,
  AreaTitleImg,
  AreaTitleTech,
  AreaTitleTechMobile,
  ContainerHabilitis,
  ContainerMobile,
  ContainerTotal,
  ContentHabilitis,
  HabilitisArea,
  HabitsMobile,
  SubtitleMobile,
  SubTitleTech,
  SwiperSlideContent,
  TechImg,
  TitelTechMobile,
  TitleTech,
} from "./styled";

import python from "/public/images/python.png";
import react from "/public/images/react.png";
import database from "/public/images/database.png";
import git from "/public/images/git.png";
import docker from "/public/images/docker.png";
import figma from "/public/images/figma.png";
import { LineWhite, Titles } from "@/styles/kitUI";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import { DiPython } from "react-icons/di";
import { SiDocker, SiFigma, SiReact } from "react-icons/si";
import {ImDatabase} from "react-icons/im"
import {BsGit} from "react-icons/bs"

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
        // código JSX para telas menores que 900px
        <ContainerMobile>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ height: "100%", width: "100%" }}>
            <SwiperSlideContent>
              <HabitsMobile data-aos="fade-up">
                <AreaImgTechMobile>
                  <DiPython size={40} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Desenvolvimento Back End</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>NodeJS, Django, Express, MySQL, SQLite, MongoDB e AJAX </SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile>
            </SwiperSlideContent>
            <SwiperSlideContent><HabitsMobile>
                <AreaImgTechMobile>
                  <SiReact size={35} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Desenvolvimento Front End</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>ReactJs, React-Native, TailwindCSS, Styled Components</SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile></SwiperSlideContent>
            <SwiperSlideContent><HabitsMobile>
                <AreaImgTechMobile>
                  <ImDatabase size={30} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Banco de Dados</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>MySQL, Postgre, MongoDB, MariaDB, SQLserver</SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile></SwiperSlideContent>
            <SwiperSlideContent><HabitsMobile>
                <AreaImgTechMobile>
                  <BsGit size={30} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Controle de Versão Git</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>Versionamento de código utilizando Github ou GitLab</SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile></SwiperSlideContent>
            <SwiperSlideContent><HabitsMobile>
                <AreaImgTechMobile>
                  <SiDocker size={40} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Conteinerização</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>Configuração de aplicações back end e front end em ambiente docker</SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile></SwiperSlideContent>
            <SwiperSlideContent><HabitsMobile>
                <AreaImgTechMobile>
                  <SiFigma size={30} color="white"/>
                </AreaImgTechMobile>
                <AreaTitleTechMobile>
                  <TitelTechMobile>Design de Aplicação</TitelTechMobile>
                </AreaTitleTechMobile>
                <AreaSubTitleTechMobile>
                  <SubtitleMobile>Figma, Photoshop</SubtitleMobile>
                </AreaSubTitleTechMobile>
              </HabitsMobile></SwiperSlideContent>
            
          </Swiper>
        </ContainerMobile>
      ) : (
        <ContainerHabilitis>
          <ContentHabilitis>
         
            <HabilitisArea data-aos="fade-up" >
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
            <HabilitisArea data-aos="fade-up" >
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
            <HabilitisArea data-aos="fade-up" >
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
            <HabilitisArea data-aos="fade-up" >
              <AreaTitleImg>
                <TechImg src={git} alt="" />
              </AreaTitleImg>
              <AreaTitleTech>
                <TitleTech>Controle de Versão Git</TitleTech>
              </AreaTitleTech>
              <AreaSubTech>
                <SubTitleTech>
                  Versionamento de código utilizando Github ou GitLab
                </SubTitleTech>
              </AreaSubTech>
            </HabilitisArea>
            <HabilitisArea data-aos="fade-up" >
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
            <HabilitisArea data-aos="fade-up" >
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
