import { FooterContent } from "@/components/FooterContent/FooterContent";
import { Header } from "@/components/Header/Header";
import { Container, Footer, InfoFooter, Sub, Tela } from "@/styles/kitUI";
import { useEffect, useState } from "react";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion";
export default function Projetos() {
  return (
    <Tela>
      <Container>
        <Header />
        
        <motion.div
          animate={{ x: "100vw" }} 
          transition={{ duration: 10, repeat: Infinity }} 
          >
          <DiReact 
            size={40}
          />
        </motion.div>
      </Container>
      <Footer>
        <FooterContent />
        <InfoFooter>
          Desenvolvido utilizando <Sub>NextsJs</Sub>, <Sub>Typescript</Sub>,{" "}
          <Sub>Vercel</Sub> entre outras tecnologias.
        </InfoFooter>
      </Footer>
    </Tela>
  );
}
