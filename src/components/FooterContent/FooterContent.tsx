import Image from "next/image";
import { AreaButton, AreaMessage, AreaNomeeEmail, ButtonSend, ContainerFooter, DesContato, ImgLabel, InputMessage, InputPrimary, LeftFooter, RightFooter, TitleContato } from "./styled";

import email from '/public/images/email.png'
import phone from '/public/images/phone.png'

export function FooterContent(){


    return(
            <ContainerFooter>
                <LeftFooter>
                
                        <TitleContato>Entre em Contato</TitleContato>
                
                    <ImgLabel>
                        <Image src={email} alt='email logo'/>
                        <DesContato>leonardoc.soares08@gmail.com</DesContato>
                    </ImgLabel>
                    <ImgLabel>
                    <Image src={phone} alt='telefone logo'/>
                        <DesContato>(11) 99290-9966</DesContato>
                    </ImgLabel>
                </LeftFooter>
                <RightFooter>
                <AreaNomeeEmail>
                        <InputPrimary type='text' placeholder="Nome Completo"/>
                        <InputPrimary type='text' placeholder="E-mail"/>
                </AreaNomeeEmail>
                <AreaMessage>
                        <InputMessage placeholder="Sua mensagem"/>
                </AreaMessage>
                <AreaButton>
                        <ButtonSend>Enviar</ButtonSend>
                </AreaButton>
                </RightFooter>
            </ContainerFooter>

    )
}