import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Social } from "@/components/Social/Social";
import { Header } from "@/components/Header/Header";
import { ContainarRepo, Container, Footer, InfoFooter, LineWhite, LineWhiteSpace, Sub, Tela, TelaSecond } from "@/styles/kitUI";
import { Habilitis } from "@/components/Habilitis/Habilitis";
import { Projects } from "@/components/Projects/Projects";
import { Repository } from "@/components/Repository/Repository";
import styled from "styled-components";
import { FooterContent } from "@/components/FooterContent/FooterContent";
import { useEffect } from "react";

import Aos from 'aos'

import 'aos/dist/aos.css'
import { BackgroundTech } from "@/components/BackgroundTech";

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 })

  },[])

  return (
    <>
    <BackgroundTech/>
    <Tela>
      <Container>
      <Header/>
      <AboutMe/>
      </Container>
    </Tela>
    <Tela>
      <Container>
        <Social/>
        <LineWhite/>
        <Habilitis />
        <LineWhite data-aos="fade-in"/>
        <Projects/>
        <LineWhiteSpace data-aos="fade-in"/>
      </Container>
    </Tela>
    <Tela>
      <ContainarRepo>
        <Repository/>
      </ContainarRepo>
      <Footer>
        <FooterContent/>
        <InfoFooter>Desenvolvido utilizando <Sub>NextsJs</Sub>, <Sub>Typescript</Sub>, <Sub>Vercel</Sub> entre outras tecnologias.</InfoFooter>
      </Footer>
    </Tela>
    </>
  )
}
