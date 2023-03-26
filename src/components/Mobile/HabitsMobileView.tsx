import { DiPython } from "react-icons/di";
import { ImDatabase } from "react-icons/im";
import { SiReact, SiNginx, SiDocker, SiFigma } from "react-icons/si";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  ContainerMobile,
  SwiperSlideContent,
  AreaImgTechMobile,
  AreaTitleTechMobile,
  TitelTechMobile,
  AreaSubTitleTechMobile,
  SubtitleMobile,
  HabitsMobile,
} from "../Habilitis/styled";

export function HabitsMobileView() {
  return (
    <>
      <ContainerMobile>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{ height: "100%", width: "100%" }}
        >
          <SwiperSlideContent>
            <HabitsMobile data-aos="fade-up">
              <AreaImgTechMobile>
                <DiPython size={40} color="white" />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>Desenvolvimento Back End</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>
                  NodeJS, Django, Express, MySQL, SQLite, MongoDB e AJAX{" "}
                </SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
          <SwiperSlideContent>
            <HabitsMobile>
              <AreaImgTechMobile>
                <SiReact size={35} color="white" />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>Desenvolvimento Front End</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>
                  ReactJs, React-Native, TailwindCSS, Styled Components
                </SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
          <SwiperSlideContent>
            <HabitsMobile>
              <AreaImgTechMobile>
                <ImDatabase size={30} color="white" />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>Banco de Dados</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>
                  MySQL, Postgre, MongoDB, MariaDB, SQLserver
                </SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
          <SwiperSlideContent>
            <HabitsMobile>
              <AreaImgTechMobile>
                <SiNginx color="white" size={30} />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>DevOps</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>
                  Deploy usando Vercel, Nginx e Gunicorn
                </SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
          <SwiperSlideContent>
            <HabitsMobile>
              <AreaImgTechMobile>
                <SiDocker size={40} color="white" />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>Conteinerização</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>
                  Configuração de aplicações back end e front end em ambiente
                  docker
                </SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
          <SwiperSlideContent>
            <HabitsMobile>
              <AreaImgTechMobile>
                <SiFigma size={30} color="white" />
              </AreaImgTechMobile>
              <AreaTitleTechMobile>
                <TitelTechMobile>Design de Aplicação</TitelTechMobile>
              </AreaTitleTechMobile>
              <AreaSubTitleTechMobile>
                <SubtitleMobile>Figma, Photoshop</SubtitleMobile>
              </AreaSubTitleTechMobile>
            </HabitsMobile>
          </SwiperSlideContent>
        </Swiper>
      </ContainerMobile>
    </>
  );
}
