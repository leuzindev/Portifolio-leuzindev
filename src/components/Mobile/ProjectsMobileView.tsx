import { EffectCreative } from "swiper";
import { AreaProjectsMobile, AreaProjectMobile, AreaImgMobile, ImgProject, AreaTitleProject, TitleProject } from "../Projects/styled";

import { Swiper, SwiperSlide } from "swiper/react";

import cines from "/public/images/cover_cine.png";
import pures from "/public/images/cover_pure.png";
import habits from "/public/images/cover_habits.png";
import hzc from "/public/images/cover_hzc.png";
import connect from "/public/images/cover_connect.png";
import lorem from "/public/images/cover_lorem.png";

export function ProjectsMobileView() {
  return (
    <>
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
                <a href="https://github.com/leuzindev/Cineflow">
                <ImgProject src={cines} alt="img projeto" />

                </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>Cine Flow - Streaming mobile app</TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <AreaProjectMobile>
              <AreaImgMobile>
              <a href="">
                <ImgProject src={pures} alt="img projeto" />

              </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>Pure power - montador de treinos</TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <AreaProjectMobile>
              <AreaImgMobile>
              <a href="https://github.com/leuzindev/Habits-Nlw-Frontend">
                <ImgProject src={habits} alt="img projeto" />

              </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>
                  Habits - site e aplicativo de hábitos
                </TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <AreaProjectMobile>
              <AreaImgMobile>
              <a href="https://github.com/leuzindev/HZC_app">
                <ImgProject src={hzc} alt="img projeto" />

              </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>Hzc - site skate board</TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <AreaProjectMobile>
              <AreaImgMobile>
              <a href="https://github.com/leuzindev/CONNECT_BANK">
                <ImgProject src={connect} alt="img projeto" />

              </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>Connect Bank - banco vitual</TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <AreaProjectMobile>
              <AreaImgMobile>
              <a href="https://github.com/leuzindev/LOREM_BARBER">

                <ImgProject src={lorem} alt="img projeto" />
              </a>
              </AreaImgMobile>
              <AreaTitleProject>
                <TitleProject>Lorem barber - site para barbearia</TitleProject>
              </AreaTitleProject>
            </AreaProjectMobile>
          </SwiperSlide>
        </Swiper>
      </AreaProjectsMobile>
    </>
  );
}
