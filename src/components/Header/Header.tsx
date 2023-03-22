import { AreaLinks, ContainerHead, LinkButton, Links } from "./styled";
import logo from '/public/images/LeuzinDev.png'
import Image from "next/image";
import Link from "next/link";


export function Header(){

    return(
        <ContainerHead>
            <Link href="/"><Image src={logo} alt="logo"/></Link>
            <AreaLinks>
                <Links href="/">Home</Links>
                <Links>Habilidades</Links>
                <Links>Projetos</Links>
                <Links>Repositorios</Links>
                <LinkButton>Contato</LinkButton>
            </AreaLinks>
        </ContainerHead>
    )
}