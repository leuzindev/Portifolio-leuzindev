import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Header } from "@/components/Header/Header";
import { Container, Tela } from "@/styles/kitUI";



export default function Home() {
  return (
    <Tela>
      <Container>
      <Header/>
      <AboutMe/>
      </Container>
    </Tela>
  )
}
