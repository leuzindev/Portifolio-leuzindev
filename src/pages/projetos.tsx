import { FooterContent } from "@/components/FooterContent/FooterContent";
import { Header } from "@/components/Header/Header";
import { ProjectsContent } from "@/components/ProjectsContent/ProjectsContent";
import { Container, Footer, InfoFooter, Sub, Tela, TelaSecond } from "@/styles/kitUI";
import { useEffect, useState } from "react";

export default function Projetos() {
  return (
    <TelaSecond>
      <Container>
        <Header />
        <ProjectsContent />
   
      </Container>
      <Footer>
        <FooterContent />
        <InfoFooter>
          Desenvolvido utilizando <Sub>NextsJs</Sub>, <Sub>Typescript</Sub>,{" "}
          <Sub>Vercel</Sub> entre outras tecnologias.
        </InfoFooter>
      </Footer>
    </TelaSecond>
  );
}
