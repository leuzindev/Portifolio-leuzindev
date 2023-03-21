import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Social } from "@/components/Social/Social";
import { Header } from "@/components/Header/Header";
import { Container, LineWhite, Tela, TelaSecond } from "@/styles/kitUI";
import { Habilitis } from "@/components/Habilitis/Habilitis";
import { Projects } from "@/components/Projects/Projects";
import { Repository } from "@/components/Repository/Repository";



export default function Home() {
  return (
    <>
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
        <Habilitis/>
        <LineWhite/>
        <Projects/>
        <LineWhite/>
      </Container>
    </Tela>
    <Tela>
      <Container>
        <Repository/>
      </Container>

    </Tela>
    </>
  )
}
