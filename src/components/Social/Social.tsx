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
                <SocialIcons src={github} alt="Github logo" />
                <LabelSocial href="https://github.com/leuzindev">Github</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={discord} alt="Discord Logo"/>
                <LabelSocial href="#">Discord</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={instagram} alt="Instagram Logo"/>
                <LabelSocial href="https://www.instagram.com/leuzin._/">Instagram</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={twitter} alt="Twitter Logo"/>
                <LabelSocial href="#">Twitter</LabelSocial>
            </AreaImgLabel>
            <AreaImgLabel>
                <SocialIcons src={linkedin} alt="Linkedin Logo"/>
                <LabelSocial href="https://www.linkedin.com/in/leonardodevs/">Linkedin</LabelSocial>
            </AreaImgLabel>
           
        </ContainerSocial>
    )
}