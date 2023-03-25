import {
  AreaImg,
 
 
} from "../Projects/styled";
import {
  AreaProjectName,
  AreaProjectTech,
  AreaTitle,
  BgContainer,
  ProjectContainer,
  TechName,
  ProjectImg,
} from "./styled";

import cine from "/public/images/cover_cine.png";
import pure from "/public/images/cover_pure.png";
import habits from "/public/images/cover_habits.png";
import hzc from "/public/images/cover_hzc.png";
import connect from "/public/images/cover_connect.png";
import lorem from "/public/images/cover_lorem.png";
import { Titles } from "@/styles/kitUI";

import { DiReact, DiPython, DiJavascript1 } from "react-icons/di";

export function ProjectsContent() {

  


  return (
    <BgContainer>
      <AreaTitle>
        <Titles>Projetos</Titles>
      </AreaTitle>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={cine} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
            <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={pure} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={habits} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={hzc} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={connect} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={lorem} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={cine} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={pure} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
      <ProjectContainer>
        <AreaImg>
          <ProjectImg src={pure} alt="imagem do projeto" />
        </AreaImg>
        <AreaProjectName>
        <TechName>CineFlow</TechName>
        </AreaProjectName>
        <AreaProjectTech>
        <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
            <DiPython 
                color="white"
                size={30}
                spacing={10}
            />
        </AreaProjectTech>
      </ProjectContainer>
    </BgContainer>
  );
}
