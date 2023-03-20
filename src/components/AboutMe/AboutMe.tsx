import { AreaAboutMeContainer, LeftCard, MeImage, RightCard } from "./styled";


import me from '/public/images/me.png'
export function AboutMe() {

    return(

        <AreaAboutMeContainer>
            <LeftCard>

            </LeftCard>
            <RightCard>
                <MeImage src={me} alt="Minha foto"/>
            </RightCard>
        </AreaAboutMeContainer>
    )
}