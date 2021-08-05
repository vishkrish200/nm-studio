import Navigation from "../../components/Navigation";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { useState } from "react";

const Page = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProjectHero = styled.div`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectTitle = styled.div`
  color: white;
  font-size: 10rem;
  text-align: center;
`;

const ProjectSubtitle = styled.div`
  width: 50%;
  color: white;
  text-align: center;
`;
const ProjectDescription = styled.div`
  margin: 10%;
  width: 50%;
  color: white;
  text-align: center;
`;
const PictureGallery = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Picture = styled.div`
  grid-row: ${({ index }) => (index == 0 ? "span 2 /span 2" : "0")};
  margin: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function ProjectPage({ project }) {
  const HeroImage = getStrapiMedia(project.Thumbnail);
  // let { indexState, setIndex } = useState(-1);
  let indexState = -3;

  return (
    <>
      <Page>
        <Navigation />
        <ProjectHero imageUrl={HeroImage}>
          <ProjectTitle>{project.Title}</ProjectTitle>
          <ProjectSubtitle>{project.SubTitle}</ProjectSubtitle>
        </ProjectHero>
        {project.TextRow &&
          project.TextRow.map((textfield) => (
            <>
              <ProjectDescription>{textfield.Description}</ProjectDescription>
              <PictureGallery>
                {project.Gallery &&
                  project.Gallery.slice(indexState, indexState + 3).map(
                    (pictures, index) => {
                      indexState = index + 1;
                      // setIndex(indexState + 1);
                      return (
                        <Picture index={indexState}>
                          <img
                            src={getStrapiMedia(pictures)}
                            width={indexState == 0 ? "600px" : "400px"}
                          />
                        </Picture>
                      );
                    }
                  )}
              </PictureGallery>
            </>
          ))}
      </Page>
    </>
  );
}

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = (await fetchAPI(`/projects?slug=${params.slug}`))[0];
  // const categories = await fetchAPI("/categories");
  const projects = await fetchAPI("/projects");
  return {
    props: {
      projects,
      project,
    },
  };
}
