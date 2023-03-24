import { AreaLinks, ContainerHead, LinkButton, Links } from "./styled";
import logo from '/public/images/LeuzinDev.png'
import Image from "next/image";
import Link from "next/link";



export function Header(){

    return(
        <ContainerHead>
            <Link href="/" ><Image src={logo} alt="logo"/></Link>
            <AreaLinks>
                <Links to="/">Home</Links>
                <Links to="hab" smooth={true} duration={1000}>Habilidades</Links>
                <Links to="projects" smooth={true} duration={1000}>Projetos</Links>
                <Links to="repos" smooth={true} duration={1000}>Repositorios</Links>
                <LinkButton to="contact" smooth={true} duration={1000}>Contato</LinkButton>
            </AreaLinks>
        </ContainerHead>
    )
}