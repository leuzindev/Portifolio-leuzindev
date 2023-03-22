import { FooterContent } from "@/components/FooterContent/FooterContent";
import { Header } from "@/components/Header/Header";
import { RepoContent } from "@/components/RepoContent/RepoContent";
import { Container, Footer, InfoFooter, Sub, Tela, TelaSecond } from "@/styles/kitUI";

export default function Repositorys() {
  return (
    <Tela>
      <Container>
        <Header />
        <RepoContent />


      </Container>
        
    </Tela>
  );
}
