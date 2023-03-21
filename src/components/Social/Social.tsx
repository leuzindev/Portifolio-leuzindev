import { AreaImgLabel, ContainerSocial, LabelSocial, SocialIcons } from "./styled";

import github from '/public/images/github.png'
import discord from '/public/images/discord.png'
import instagram from '/public/images/instagram.png'
import twitter from '/public/images/twitter.png'
import linkedin from '/public/images/linkedin.png'


export function Social(){

    return(
        <ContainerSocial>
            <AreaImgLabel>
                <SocialIcons src={github} alt="Github logo"/>
                <LabelSocial>Github</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={discord} alt="Discord Logo"/>
                <LabelSocial>Discord</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={instagram} alt="Instagram Logo"/>
                <LabelSocial>Instagram</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={twitter} alt="Twitter Logo"/>
                <LabelSocial>Twitter</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={linkedin} alt="Linkedin Logo"/>
                <LabelSocial>Linkedin</LabelSocial>
            </AreaImgLabel>
           
        </ContainerSocial>
    )
}