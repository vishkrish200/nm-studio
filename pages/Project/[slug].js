import Navigation from "../../components/Navigation";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { useCallback, useState } from "react";
import Footer from "../../components/Footer";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";

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
const Arrow = styled.i`
  border: solid white;
  border-width: 0 0.8vh 0.8vh 0;
  display: inline-block;
  margin-top: 15%;
  padding: 1%;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
const ProjectDescription = styled.div`
  margin: 10% 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const PictureGallery = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  margin: 10% 0;
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
  width: 500px;
  height: 100%;
  min-height: 300px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function ProjectPage({ project, categories }) {
  const HeroImage = getStrapiMedia(project.Thumbnail);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Page>
        <Navigation categories={categories} />
        <ProjectHero imageUrl={HeroImage}>
          <ProjectTitle>{project.Title}</ProjectTitle>
          <ProjectSubtitle>{project.SubTitle}</ProjectSubtitle>
          <Arrow />
        </ProjectHero>
        {project.TextRow.map((textfield, index) => (
          <>
            <ProjectDescription>{textfield.Description}</ProjectDescription>
            {}
            <PictureGallery>
              {project.Gallery &&
                project.Gallery.slice(
                  index * 3,
                  index * 3 + 3 > project.Gallery.length
                    ? project.Gallery.length - 1
                    : index * 3 + 3
                ).map((pictures, pictureIndex) => {
                  return (
                    <Picture
                      index={index}
                      pictureIndex={pictureIndex}
                      image={getStrapiMedia(pictures)}
                    ></Picture>
                  );
                })}
            </PictureGallery>
          </>
        ))}
        {/* <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway> */}

        <Footer />
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
  return {
    props: {
      project,
    },
  };
}
