import Navigation from "../../components/Navigation";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { useCallback, useState } from "react";
import Footer from "../../components/Footer";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import Arrow from "../../components/Arrow";

const Page = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ProjectHero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${({ imageUrl }) => imageUrl});
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
  margin-top: 10%;

  color: white;
  font-size: 10rem;
  text-align: center;
`;

const ProjectSubtitle = styled.div`
  width: 100%;
  color: white;
  text-align: center;
`;

const ProjectDescription = styled.div`
  margin: 5% 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const PictureGallery = styled.div`
  width: auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  margin: 10% auto;
  row-gap: 3%;
  column-gap: 1.75%;
  grid-auto-flow: column;
`;

const Picture = styled.div`
  grid-row: ${({ pictureIndex }) => (pictureIndex == 2 ? "span 2 /span 2" : 0)};
  order: ${({ index, pictureIndex }) =>
    index % 2 != 0 && (pictureIndex == 0 || pictureIndex == 1)
      ? "9999"
      : "-9999"};
  @media (max-width: 768px) {
    grid-row: span 1 / span 1;
    width: 200px;
    /* min-height: 200px; */
  }
  /* margin: 5%; */
  min-width: 500px;
  /* height: auto; */
  /* height: 100%; */
  min-height: 300px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function ProjectPage({ project, categories }) {
  const HeroImage = getStrapiMedia(project.Thumbnail);
  let tIndex = 0;

  return (
    <>
      <Page>
        <Navigation categories={categories} />
        <ProjectHero imageUrl={HeroImage}>
          <ProjectTitle>{project.Title}</ProjectTitle>
          <ProjectSubtitle>{project.SubTitle}</ProjectSubtitle>
          <Arrow marginTop={"10%"} />
        </ProjectHero>
        {project.TextRow.map((textfield, index) => (
          <>
            <ProjectDescription>{textfield.Description}</ProjectDescription>(
            <Gallery>
              <PictureGallery>
                {project.Gallery &&
                  project.Gallery.slice(
                    index * 3,
                    index * 3 + 3 > project.Gallery.length
                      ? project.Gallery.length
                      : index * 3 + 3
                  ).map((picture, pictureIndex) => {
                    tIndex = index;
                    return (
                      <Item
                        original={getStrapiMedia(picture)}
                        thumbnail={getStrapiMedia(picture.formats.thumbnail)}
                        width={picture.width}
                        height={picture.height}
                      >
                        {({ ref, open }) => (
                          <Picture
                            index={index}
                            pictureIndex={pictureIndex}
                            image={getStrapiMedia(picture)}
                            ref={ref}
                            onClick={open}
                          ></Picture>
                        )}
                      </Item>
                    );
                  })}
              </PictureGallery>
            </Gallery>
            )
          </>
        ))}
        {project.Gallery.length > (tIndex + 1) * 3 ? (
          <Gallery>
            <PictureGallery>
              {project.Gallery &&
                project.Gallery.slice(
                  (tIndex + 1) * 3,
                  project.Gallery.length
                ).map((picture, pictureIndex) => {
                  return (
                    <>
                      <Item
                        original={getStrapiMedia(picture)}
                        thumbnail={getStrapiMedia(picture.formats.thumbnail)}
                        width={picture.width}
                        height={picture.height}
                      >
                        {({ ref, open }) => (
                          <Picture
                            ref={ref}
                            onClick={open}
                            index={tIndex + 1}
                            pictureIndex={pictureIndex}
                            image={getStrapiMedia(picture)}
                          ></Picture>
                        )}
                      </Item>
                    </>
                  );
                })}
            </PictureGallery>
          </Gallery>
        ) : null}
      </Page>
      <Footer />
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
  return {
    props: {
      project,
    },
  };
}
