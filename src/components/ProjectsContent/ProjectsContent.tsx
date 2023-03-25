import {
  AreaImg,
  ProjectImg,
 
} from "../Projects/styled";
import {
  AreaProjectName,
  AreaProjectTech,
  AreaTitle,
  BgContainer,
  ProjectContainer,
  TechName,
} from "./styled";

import cine from "/public/images/cine.png";
import pure from "/public/images/pure.png";

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
