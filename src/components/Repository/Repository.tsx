import { SeeMore, Titles } from "@/styles/kitUI";
import { useEffect, useState } from "react";
import {
  AreaRepositoryDescription,
  AreaRespositorys,
  AreaTech,
  AreaTitleRepository,
  ContainerRepositorys,
  GithubBar,
  InfoStars,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryName,
  RepositoryRow,
  RepositoryWhite,
  TechRepoImg,
} from "./styled";


import star from "/public/images/star.png";
import fork from "/public/images/fork.png";

import { api } from "@/lib/axios";

interface IRepository {
  name: string;
  description: string;
  link: string;
  stars: string;
  forks: string;
}


export function Repository() {
  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    api.get("leuzindev").then((res) => {
      return handleRepo(res);
    });
  }, []);

  

  function handleRepo(repo: any) {
    const newRepos : IRepository[] = repo.data.map((repoData: any) => {
      return {
        name: repoData.repo,
        description: repoData.description,
        link: repoData.link,
        stars: repoData.stars,
        forks: repoData.forks,
      };
    });
    setRepos(newRepos);
  }

  return (
    <ContainerRepositorys>
      <AreaTitleRepository>
        <Titles>Repositórios</Titles>
        <SeeMore href="/repositorys">Ver mais</SeeMore>
      </AreaTitleRepository>
      <AreaRespositorys>
        <RepositoryRow>
          <RepositoryContainer href={repos[0]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[0]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[0]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[0]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[0]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>

          <RepositoryContainer href={repos[1]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[1]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[1]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[1]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[1]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer href={repos[2]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[2]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[2]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[2]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[2]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>
        </RepositoryRow>
        <RepositoryRow>
          <RepositoryContainer href={repos[3]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[3]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[3]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[3]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[3]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer href={repos[4]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[4]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[4]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[4]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[4]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>
          <RepositoryContainer href={repos[5]?.link}>
            <RepositoryWhite>
              <RepositoryName>{repos[5]?.name}</RepositoryName>
            </RepositoryWhite>
            <AreaRepositoryDescription>
              <RepositoryDescription>{repos[5]?.description}</RepositoryDescription>
            </AreaRepositoryDescription>
            <AreaTech>
              <TechRepoImg src={star} alt="estrela" />
              <InfoStars>{repos[5]?.stars}</InfoStars>
              <TechRepoImg src={fork} alt="fork" />
              <InfoStars>{repos[5]?.forks}</InfoStars>
            </AreaTech>
          </RepositoryContainer>
        </RepositoryRow>
      </AreaRespositorys>
      <GithubBar></GithubBar>
    </ContainerRepositorys>
  );
}
