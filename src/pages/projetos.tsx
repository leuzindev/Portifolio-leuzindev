import { FooterContent } from "@/components/FooterContent/FooterContent";
import { Header } from "@/components/Header/Header";
import { Container, Footer, InfoFooter, Sub, Tela } from "@/styles/kitUI";

export default function Projetos() {
  return (
    <Tela>
      <Container>
        <Header />
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
