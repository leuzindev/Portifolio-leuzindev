import { calculaIdade } from "@/utils/idade";
import { AreaAboutMeContainer, AreaCV, AreaSub, AreaTitle, 
    ButtonCv, 
    LeftCard, MeImage, RightCard, Subtitle, SubtitleColor, 
    TitleMe, TitleMeColor } from "./styled";

import Link from 'next/link';
import me from '/public/images/me_cold.png'

const minhaDataNascimento = '2003-04-08';



export function AboutMe() {

    return(
      
        <AreaAboutMeContainer data-aos="fade-up" >
            <LeftCard>
                <AreaTitle>
                    <TitleMe>Olá, tudo bem?!</TitleMe>
                    <TitleMe>Sou <TitleMeColor>Leonardo Cunha Soares</TitleMeColor></TitleMe>  
                </AreaTitle>
                <AreaSub>
                    <Subtitle>Tenho {calculaIdade(minhaDataNascimento)} anos, estudante de <SubtitleColor>Analise e desenvolvimento de Sistemas</SubtitleColor> e procuro</Subtitle>
                    <Subtitle>sempre aprender algo novo. Comecei na computação as 17 anos e ao longo da</Subtitle>
                    <Subtitle>minha jornada criei alguns projetos e adquiri um conhecimento que acredito que </Subtitle>
                    <Subtitle>deve ser compartilhado com outros.</Subtitle>
                    <Subtitle>Sou <SubtitleColor>Desenvolvedor Web Full Stack</SubtitleColor>, tenho experiência em Python, ReactJS, </Subtitle>
                    <Subtitle>ReactNative entre outras linguagens e frameworks. Espero que goste</Subtitle>
                </AreaSub>     
                <AreaCV>
                    <ButtonCv  href="https://files.smallpdf.com/files/f192f1e5f6496f84fc508d6e61c2ae17.pdf?name=Cv_leonardo.pdf">View CV</ButtonCv>
                    
                </AreaCV>             
            </LeftCard>
            <RightCard >
                <MeImage src={me} alt="Minha foto"/>
            </RightCard>
        </AreaAboutMeContainer>
    )
}