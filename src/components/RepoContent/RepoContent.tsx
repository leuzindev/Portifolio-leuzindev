import { Footer, InfoFooter, Sub } from "@/styles/kitUI";
import { FooterContent } from "../FooterContent/FooterContent";
import Image from "next/image";
import {
  AreaLabelRepo,
  AreaPagination,
  AreaRepo,
  ContainerRepo,
  Info,
  LabelRepo,
  Paginate,
  RepoInfo,
  RepositoryContainer,
  RepoSub,
  RepoWhite,
  SubTitleRepo,
  TitleRepo,
} from "./styled";

import star from "/public/images/star.png";
import fork from "/public/images/fork.png";

export function RepoContent() {
  return (
    <>
      <ContainerRepo>
        <AreaLabelRepo>
          <LabelRepo>Repositórios</LabelRepo>
        </AreaLabelRepo>
        <AreaRepo>
            <RepositoryContainer>
                <RepoWhite>
                   <TitleRepo>Cineflow</TitleRepo>
                    
                </RepoWhite>
                <RepoSub>
                    <SubTitleRepo>loremloremloremlorem</SubTitleRepo>
                </RepoSub>
                <RepoInfo>
                    <Image  src={star} alt="estrela"/>
                    <Info>2</Info>
                    <Image  src={fork} alt="fork"/>
                    <Info>2</Info>
                </RepoInfo>

            </RepositoryContainer>
            
        </AreaRepo>
           <AreaPagination>
            <Paginate> &lt; </Paginate>

            <Paginate> 1 </Paginate>

            <Paginate> &gt; </Paginate>
           </AreaPagination>
      </ContainerRepo>




      
    </>
  );
}
