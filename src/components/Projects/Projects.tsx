import { SeeMore, Titles } from "@/styles/kitUI";
import {
  AreaImg,
  AreaImgMobile,
  AreaImgTech,
  AreaNameTech,
  AreaProjectMobile,
  AreaProjects,
  AreaProjectsMobile,
  AreaTitleProject,
  ContainerProjects,
  ImgProject,
  NameProject,
  Project,
  ProjectImg,
  SliderContent,
  TechsProjectsImgs,
  TitleProject,
  TitleSeeMore,
} from "./styled";

import cine from "/public/images/cine.png";
import pure from "/public/images/pure.png";

import icoPython from "/public/images/icoPython.png";
import icoReact from "/public/images/icoReact.png";
import icoDocker from "/public/images/icoDocker.png";
import { useState, useEffect } from "react";

import cines from "/public/images/cover_cine.png";
import pures from "/public/images/cover_pure.png";
import habits from "/public/images/cover_habits.png";
import hzc from "/public/images/cover_hzc.png";
import connect from "/public/images/cover_connect.png";
import lorem from "/public/images/cover_lorem.png";

import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

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
        <SeeMore href="/projetos">Ver mais</SeeMore>
      </TitleSeeMore>
      {isMobile ? (
        // código JSX para telas menores que 900px
        <AreaProjectsMobile>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-125%", 0, -800],
                rotate: [0, 0, -90],
              },
              next: {
                shadow: true,
                translate: ["125%", 0, -800],
                rotate: [0, 0, 90],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper5"
          >
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={cines} alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={pures}  alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={habits}  alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={hzc}  alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={connect}  alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={lorem}  alt="img projeto"/>
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - mobile application</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
          
          </Swiper>
        </AreaProjectsMobile>
      ) : (
        // código JSX para telas maiores ou iguais a 900px
        <AreaProjects>
          {/* data-aos="fade-right" */}
          <Project>
            <AreaImg>
              <ProjectImg src={cine} alt="Cineflow app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>CineFlow - Mobile Application</NameProject>
            </AreaNameTech>
            <AreaImgTech>
              <TechsProjectsImgs src={icoPython} alt="icone Python" />
              <TechsProjectsImgs src={icoReact} alt="icone Reac" />
              <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
            </AreaImgTech>
          </Project>
          {/* data-aos="fade-up" */}
          <Project>
            <AreaImg>
              <ProjectImg src={pure} alt="Pure Power app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>Pure Power - Mobile Application</NameProject>
            </AreaNameTech>
            <AreaImgTech>
              <TechsProjectsImgs src={icoPython} alt="icone Python" />
              <TechsProjectsImgs src={icoReact} alt="icone Reac" />
              <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
            </AreaImgTech>
          </Project>
          {/* data-aos="fade-left" */}
          <Project>
            <AreaImg>
              <ProjectImg src={cine} alt="Cineflow app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>Pure Power - Mobile Application</NameProject>
            </AreaNameTech>
            <AreaImgTech>
              <TechsProjectsImgs src={icoPython} alt="icone Python" />
              <TechsProjectsImgs src={icoReact} alt="icone Reac" />
              <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
            </AreaImgTech>
          </Project>
        </AreaProjects>
      )}
    </ContainerProjects>
  );
}
