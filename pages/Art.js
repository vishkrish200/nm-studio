import Navigation from "../components/Navigation";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
`;

const HeroDiv = styled.div`
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

const Projects = [
  { url: "https://source.unsplash.com/random", name: "Project Name" },
  { url: "https://source.unsplash.com/random", name: "Project Name" },
  { url: "https://source.unsplash.com/random", name: "Project Name" },
  { url: "https://source.unsplash.com/random", name: "Project Name" },
  { url: "https://source.unsplash.com/random", name: "Project Name" },
  { url: "https://source.unsplash.com/random", name: "Project Name" },
];

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Project = styled.div`
  grid-column: ${({ index }) => ((index + 1) % 3 === 0 ? "span 2 /span 2" : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img.attrs(({ image }) => ({
  src: image.url,
}))`
  width: ${({ index }) => ((index + 1) % 3 === 0 ? "1200px" : "600px")};
  height: 80%;
`;

const ProjectTitle = styled.div`
  text-align: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  color: white;
`;

export default function Art() {
  return (
    <>
      <Page>
        <Navigation />
        <HeroDiv>
          <HeadingDiv>
            <GreekTitle>/ɑː(r)t/</GreekTitle>
            <Title>ART</Title>
            <SubTitle>noun</SubTitle>
            <Definition>Beautiful Functionality</Definition>
            <Arrow />
          </HeadingDiv>
        </HeroDiv>
        <ProjectsGrid>
          {Projects &&
            Projects.map((project, index) => (
              <Project index={index} image={project}>
                <Image image={project} index={index} />
                <ProjectTitle>{project.name}</ProjectTitle>
              </Project>
            ))}
        </ProjectsGrid>
      </Page>
    </>
  );
}
