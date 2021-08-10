import Navigation from "../../components/Navigation";
import styled from "styled-components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Link from "next/link";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

import Picture from "../../components/Picture";

const Page = styled.div`
  background-color: black;
  height: 100%;
`;

const HeroDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: white;
  padding-top: 10vh;
  text-align: center;
`;

const GreekTitle = styled.h1`
  margin: 0;
  font-size: 10vh;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 10rem;
  ::first-letter {
    color: red;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  font-style: italic;
  font-size: 5vh;
  font-weight: bold;
`;

const Definition = styled.h3`
  margin: 0;
  font-size: 5vh;
  font-weight: 3;
`;

const Arrow = styled.i`
  border: solid white;
  border-width: 0 0.8vh 0.8vh 0;
  display: inline-block;
  margin-top: 15vh;
  padding: 1vh;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 10fr));
  margin: 5%;
  gap: 5%;
`;

const Project = styled(motion.div)`
  grid-column: ${({ index }) => ((index + 1) % 3 === 0 ? "span 2 /span 2" : 0)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
  cursor: pointer;
  width: 100%;
  height: 500px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProjectTitle = styled.div`
  position: absolute;
  font-size: 1.5rem;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  color: white;
`;

export default function CategoryPage({ projects, category, categories }) {
  const HeroImage = getStrapiMedia(category.CoverImage);
  return (
    <>
      <Page>
        <Navigation categories={categories} />
        <HeroDiv imageUrl={HeroImage}>
          <HeadingDiv>
            <GreekTitle>{category.GreekTitle}</GreekTitle>
            <Title>{category.Name}</Title>
            <SubTitle>noun</SubTitle>
            <Definition>{category.Definition}</Definition>
            <Arrow />
          </HeadingDiv>
        </HeroDiv>
        <ProjectsGrid>
          {projects &&
            projects.map((project, index) => (
              <Link href={`/Project/${project.slug}`}>
                <Project
                  whileHover={{ scale: 1.05 }}
                  index={index}
                  image={getStrapiMedia(project.Thumbnail)}
                >
                  <ProjectTitle>{project.Title}</ProjectTitle>
                </Project>
              </Link>
            ))}
        </ProjectsGrid>
        <Footer />
      </Page>
    </>
  );
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.Name,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?Name=${params.slug}`))[0];
  const projects = await fetchAPI(`/projects?category.Name=${params.slug}`);
  return {
    props: {
      projects,
      category,
    },
    revalidate: 1,
  };
}
