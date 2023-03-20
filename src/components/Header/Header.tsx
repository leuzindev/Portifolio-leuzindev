import { AreaLinks, ContainerHead, LinkButton, Links } from "./styled";
import logo from '/public/images/LeuzinDev.png'
import Image from "next/image";


export function Header(){

    return(
        <ContainerHead>
            <Image src={logo} alt="logo"/>
            <AreaLinks>
                <Links>Home</Links>
                <Links>Habilidades</Links>
                <Links>Projetos</Links>
                <Links>Repositorios</Links>
                <LinkButton>Contato</LinkButton>
            </AreaLinks>
        </ContainerHead>
    )
}