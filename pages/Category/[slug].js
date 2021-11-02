import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { H1, H2, H3, Paragraph } from "@/components/Typography";

// export async function getStaticPaths() {
//   const categories = await fetchAPI("/categories");

//   return {
//     paths: categories.map((category) => ({
//       params: {
//         slug: category.Name,
//       },
//     })),
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const category = (await fetchAPI(`/categories?Name=${params.slug}`))[0];
  const projects = await fetchAPI(`/projects?category.Name=${params.slug}`);
  return {
    props: {
      projects,
      category,
    },
  };
}

const Page = styled.div`
  position: relative;
  background-color: black;
  height: 100%;
  z-index: 1;
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

const HeroTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: white;
  padding-top: 5%;
  text-align: center;
  margin-bottom: 5%;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  /* margin: 10% 0; */
  overflow: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 10fr));
  margin: 5%;
  gap: 5%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 10fr));
    margin: 5% 2.5%;
    /* gap: 2.5%; */
  }
`;

const Project = styled(motion.div)`
  grid-column: ${({ index }) => ((index + 1) % 3 == 0 ? "span 2 /span 2" : 0)};
  @media (max-width: 768px) {
    grid-column: span 1 / span 1;
    height: 300px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50vh;
`;

const ProjectTitle = styled.div`
  position: absolute;
  font-size: 1.5rem;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  color: white;
`;

const ProjectSubTitle = styled.div`
  font-size: 0.8rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function CategoryPage({ projects, category, categories }) {
  const HeroImage = getStrapiMedia(category.CoverImage);
  return (
    <>
      <Head>
        <title>{category.Name} - NM Studio</title>
      </Head>
      <Page>
        <Navigation categories={categories} />
        <HeroDiv imageUrl={HeroImage}>
          <HeroTextDiv>
            <H2 defaultFontSize={"4.5rem"} tabletFontSize={"1.5rem"}>
              {category.GreekTitle}
            </H2>
            <H1
              defaultFontSize={"7.5rem"}
              tabletFontSize={"4.5rem"}
              mobileFontSize={"3rem"}
              firstLetter={"red"}
            >
              {category.Name}
            </H1>
            <H2
              defaultFontSize={"2.5rem"}
              tabletFontSize={"1.5rem"}
              mobileFontSize={"1rem"}
              italic={"italic"}
              bold={"bold"}
            >
              noun
            </H2>
            <H3
              defaultFontSize={"2.5rem"}
              tabletFontSize={"1.5rem"}
              mobileFontSize={"1rem"}
            >
              {category.Definition}
            </H3>
            <Arrow marginTop={"10%"} />
          </HeroTextDiv>
        </HeroDiv>
        <GridWrapper>
          <ProjectsGrid>
            {projects &&
              projects.map((project, index) => (
                <Link key={project.slug} href={`/Project/${project.slug}`}>
                  <Project index={index} whileHover={{ scale: 1.02 }}>
                    <Image
                      src={getStrapiMedia(project.Thumbnail)}
                      layout="fill"
                      // width={project.Thumbnail.width}
                      // height={project.Thumbnail.height}
                      objectFit="cover"
                      objectPosition="50% 50%"
                      priority
                    />
                    <ProjectTitle>
                      {project.Title}
                      <ProjectSubTitle>{project.SubTitle}</ProjectSubTitle>
                    </ProjectTitle>
                  </Project>
                </Link>
              ))}
          </ProjectsGrid>
        </GridWrapper>
        <Footer />
      </Page>
    </>
  );
}
