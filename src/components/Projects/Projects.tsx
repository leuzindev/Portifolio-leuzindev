import { SeeMore, Titles } from "@/styles/kitUI";
import {
  AreaImg,
  AreaImgTech,
  AreaNameTech,
  AreaProjects,
  ContainerProjects,
  NameProject,
  Project,
  ProjectImg,
  TechsProjectsImgs,
  TitleSeeMore,
} from "./styled";

import cine from "/public/images/cine.png";
import pure from "/public/images/pure.png";

import icoPython from "/public/images/icoPython.png";
import icoReact from "/public/images/icoReact.png";
import icoDocker from "/public/images/icoDocker.png";

export function Projects() {
  return (
    <ContainerProjects>
      <TitleSeeMore>
        <Titles>Projetos</Titles>
        <SeeMore>Ver mais</SeeMore>
      </TitleSeeMore>
      <AreaProjects>
        <Project>
          <AreaImg>
            <ProjectImg src={cine} alt="Cineflow app" />
          </AreaImg>
          <AreaNameTech>
            <NameProject>CineFlow - Mobile Application</NameProject>
          </AreaNameTech>
          <AreaImgTech>
            <TechsProjectsImgs src={icoPython} alt="icone Python" />
            <TechsProjectsImgs src={icoReact} alt="icone Reac" />
            <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
          </AreaImgTech>
        </Project>
        <Project>
          <AreaImg>
            <ProjectImg src={pure} alt="Pure Power app" />
          </AreaImg>
          <AreaNameTech>
            <NameProject>Pure Power - Mobile Application</NameProject>
          </AreaNameTech>
          <AreaImgTech>
            <TechsProjectsImgs src={icoPython} alt="icone Python" />
            <TechsProjectsImgs src={icoReact} alt="icone Reac" />
            <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
          </AreaImgTech>
        </Project>
        <Project>
          <AreaImg>
            <ProjectImg src={cine} alt="Cineflow app" />
          </AreaImg>
          <AreaNameTech>
            <NameProject>Pure Power - Mobile Application</NameProject>
          </AreaNameTech>
          <AreaImgTech>
            <TechsProjectsImgs src={icoPython} alt="icone Python" />
            <TechsProjectsImgs src={icoReact} alt="icone Reac" />
            <TechsProjectsImgs src={icoDocker} alt="icone Docker" />
          </AreaImgTech>
        </Project>
      </AreaProjects>
    </ContainerProjects>
  );
}
