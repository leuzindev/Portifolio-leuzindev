import { SeeMore, Titles } from "@/styles/kitUI";
import { useEffect, useState } from "react";
import {
  AreaRepositoryDescription,
  AreaRespositorys,
  AreaStars,
  AreaSubRepo,
  AreaTech,
  AreaTitleRepository,
  ContainerRepositorys,
  GithubBar,
  GithubImgBar,
  InfoStars,
  NameRepo,
  RepoContainerMobile,
  RepoMobile,
  RepoMobileWhite,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryName,
  RepositoryRow,
  RepositoryWhite,
  SubRepo,
  TechRepoImg,
} from "./styled";

import star from "/public/images/star.png";
import fork from "/public/images/fork.png";
import bar from "/public/images/bar.png";

import { api } from "@/lib/axios";
import { BsGit } from "react-icons/bs";
import { DiPython } from "react-icons/di";
import { ImDatabase } from "react-icons/im";
import { SiReact, SiDocker, SiFigma } from "react-icons/si";
import { Pagination } from "swiper";
import {
  SwiperSlideContent,
  HabitsMobile,
  AreaImgTechMobile,
  AreaTitleTechMobile,
  TitelTechMobile,
  AreaSubTitleTechMobile,
  SubtitleMobile,
} from "../Habilitis/styled";
import { Swiper, SwiperSlide } from "swiper/react";
interface IRepository {
  name: string;
  description: string;
  link: string;
  stars: string;
  forks: string;
}

export function Repository() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // inicializa o estado com a largura atual da janela

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    api.get("leuzindev").then((res) => {
      return handleRepo(res);
    });
  }, []);

  function handleRepo(repo: any) {
    const newRepos: IRepository[] = repo.data.map((repoData: any) => {
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
    <ContainerRepositorys id="repos">
      <AreaTitleRepository>
        <Titles>Repositórios</Titles>
        
        <SeeMore href="https://github.com/leuzindev?tab=repositories">
          Ver mais
        </SeeMore>
      </AreaTitleRepository>

      {isMobile ? (
        <RepoContainerMobile data-aos="flip-up">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            style={{ height: "100%", width: "100%" }}
          >
            <SwiperSlideContent>
              <RepoMobile href={repos[0]?.link}>
                <RepoMobileWhite>
                  <NameRepo>{repos[0]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[0]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[0]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[0]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
            <SwiperSlideContent>
              <RepoMobile href={repos[1]?.link}>
                <RepoMobileWhite>
                  <NameRepo>{repos[1]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[1]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[1]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[1]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
            <SwiperSlideContent>
              <RepoMobile href={repos[2]?.link}>
                <RepoMobileWhite>
                  <NameRepo>{repos[2]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[2]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[2]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[2]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
            <SwiperSlideContent>
              <RepoMobile href={repos[3]?.link}>
                <RepoMobileWhite>
                  <NameRepo>{repos[3]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[3]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[3]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[3]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
            <SwiperSlideContent>
              <RepoMobile  href={repos[4]?.link}>
                <RepoMobileWhite>
                  <NameRepo>{repos[4]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[4]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[4]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[4]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
            <SwiperSlideContent>
              <RepoMobile href={repos[5]?.link}>
                <RepoMobileWhite >
                  <NameRepo>{repos[5]?.name}</NameRepo>
                </RepoMobileWhite>
                <AreaSubRepo>
                  <SubRepo>{repos[5]?.description}</SubRepo>
                </AreaSubRepo>
                <AreaStars>
                <TechRepoImg src={star} alt="estrela" /><TechRepoImg src={star} alt="estrela" />
                  <InfoStars>{repos[5]?.stars}</InfoStars>
                  <TechRepoImg src={fork} alt="fork" />
                  <InfoStars>{repos[5]?.forks}</InfoStars>
                </AreaStars>
              </RepoMobile>
            </SwiperSlideContent>
          </Swiper>
        </RepoContainerMobile>
      ) : (
        <>
          <AreaRespositorys data-aos="flip-up">
            <RepositoryRow>
              <RepositoryContainer href={repos[0]?.link}>
                <RepositoryWhite>
                  <RepositoryName>{repos[0]?.name}</RepositoryName>
                </RepositoryWhite>
                <AreaRepositoryDescription>
                  <RepositoryDescription>
                    {repos[0]?.description}
                  </RepositoryDescription>
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
                  <RepositoryDescription>
                    {repos[1]?.description}
                  </RepositoryDescription>
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
                  <RepositoryDescription>
                    {repos[2]?.description}
                  </RepositoryDescription>
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
                  <RepositoryDescription>
                    {repos[3]?.description}
                  </RepositoryDescription>
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
                  <RepositoryDescription>
                    {repos[4]?.description}
                  </RepositoryDescription>
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
                  <RepositoryDescription>
                    {repos[5]?.description}
                  </RepositoryDescription>
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
        </>
      )}

      <GithubBar>
      
        <GithubImgBar src={bar} alt="barra do github"  data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"/>
      </GithubBar>
    </ContainerRepositorys>
  );
}
