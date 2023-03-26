import { SeeMore, Titles } from "@/styles/kitUI";
import {
  AreaImg,
  AreaImgTech,
  AreaNameTech,
  AreaProjects,
  ContainerProjects,
  NameProject,
  Project,
  ProjectImg,
  TitleSeeMore,
} from "./styled";

import { useState, useEffect } from "react";

import cines from "/public/images/cover_cine.png";
import pures from "/public/images/cover_pure.png";
import habits from "/public/images/cover_habits.png";

import "swiper/css";
import "swiper/css/effect-creative";
import { DiPython } from "react-icons/di";
import { SiReact, SiFigma, SiPrisma, SiDjango } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ProjectsMobileView } from "../Mobile/ProjectsMobileView";

export function Projects() {
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
    <ContainerProjects id="projects">
      <TitleSeeMore>
        <Titles>Projetos</Titles>
        {isMobile ? <></> : <SeeMore href="/projetos">Ver mais</SeeMore>}
      </TitleSeeMore>
      {isMobile ? (
        <ProjectsMobileView />
      ) : (
        <AreaProjects>
          <Project data-aos="fade-right">
            <AreaImg>
            <a href="https://github.com/leuzindev/Cineflow">
              <ProjectImg src={cines} alt="Cineflow app" />
            </a>
            </AreaImg>
            <AreaNameTech>
              <NameProject>Cine Flow - Streaming mobile app</NameProject>
            </AreaNameTech>
            <AreaImgTech>
              <DiPython color="white" size={30} spacing={10} />
              <SiReact color="white" size={25} spacing={10} />
              <SiDjango color="white" size={20} spacing={10} />
              <SiFigma color="white" size={20} spacing={10} />
            </AreaImgTech>
          </Project>

          <Project data-aos="fade-up">
            <AreaImg>
            <a href="">
              <ProjectImg src={pures} alt="Pure Power app" />

            </a>
            </AreaImg>
            <AreaNameTech>
              <NameProject>Pure Power - Aplicativo de treinos</NameProject>
            </AreaNameTech>
            <AreaImgTech>
              <DiPython color="white" size={30} spacing={10} />
              <SiReact color="white" size={25} spacing={10} />
              <SiDjango color="white" size={20} spacing={10} />
              <SiFigma color="white" size={20} spacing={10} />
            </AreaImgTech>
          </Project>

          <Project data-aos="fade-left">
            <AreaImg>
            <a href="https://github.com/leuzindev/Habits-Nlw-Frontend">
              <ProjectImg src={habits} alt="Cineflow app" />
              </a>
            </AreaImg>
            <AreaNameTech>
       
              <NameProject>Habits - site e app de hábitos</NameProject>

            
            </AreaNameTech>
            <AreaImgTech>
              <DiPython color="white" size={30} spacing={10} />
              <SiReact color="white" size={25} spacing={10} />
              <SiDjango color="white" size={20} spacing={10} />
              <SiFigma color="white" size={20} spacing={10} />
              <FaNodeJs color="white" size={20} spacing={10} />
              <SiPrisma color="white" size={20} spacing={10} />
            </AreaImgTech>
          </Project>
        </AreaProjects>
      )}
    </ContainerProjects>
  );
}
