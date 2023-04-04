import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { CertificatesImg } from "./styled"
import certi from "/public/images/certi.jpg"

import { EffectCoverflow, Pagination } from "swiper";

export function CertificateContent(){
    return(
    
    <>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
        <SwiperSlide>
          <CertificatesImg src={certi} alt="Meus certificados"/>
        </SwiperSlide>
      </Swiper>
    </>
        
    )
}