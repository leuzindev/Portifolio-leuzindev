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
import { DiPython, DiNodejs  } from "react-icons/di";
import { SiReact, SiFigma, SiPrisma, SiDjango  } from "react-icons/si";
import {FaNodeJs} from "react-icons/fa"
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
              <AreaProjectMobile data-aos="fade-right">
                <AreaImgMobile>
                  <ImgProject src={cines} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Cine Flow - Streaming mobile app</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={pures} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Pure power - montador de treinos</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={habits} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Habits - site e aplicativo de hábitos</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={hzc} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Hzc - site skate board</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={connect} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Connect Bank - banco vitual</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <AreaProjectMobile>
                <AreaImgMobile>
                  <ImgProject src={lorem} alt="img projeto" />
                </AreaImgMobile>
                <AreaTitleProject>
                  <TitleProject>Lorem barber - site para barbearia</TitleProject>
                </AreaTitleProject>
              </AreaProjectMobile>
            </SwiperSlide>
          </Swiper>
        </AreaProjectsMobile>
      ) : (
        // código JSX para telas maiores ou iguais a 900px
        <AreaProjects>
          <Project data-aos="fade-right">
            <AreaImg>
              <ProjectImg src={cines} alt="Cineflow app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>Cine Flow - Streaming mobile app</NameProject>
            </AreaNameTech>
            <AreaImgTech>
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
            </AreaImgTech>
          </Project>

          <Project data-aos="fade-up">
            <AreaImg>
              <ProjectImg src={pures} alt="Pure Power app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>Pure Power - Aplicativo de treinos</NameProject>
            </AreaNameTech>
            <AreaImgTech>
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
            </AreaImgTech>
          </Project>

          <Project data-aos="fade-left">
            <AreaImg>
              <ProjectImg src={habits} alt="Cineflow app" />
            </AreaImg>
            <AreaNameTech>
              <NameProject>Habits - site e app de hábitos</NameProject>
            </AreaNameTech>
            <AreaImgTech>
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
            </AreaImgTech>
          </Project>
        </AreaProjects>
      )}
    </ContainerProjects>
  );
}
