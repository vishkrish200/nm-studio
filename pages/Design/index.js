import Navigation from "../../components/Navigation";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
`;

const HeroDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://source.unsplash.com/weekly?design/1600x900");
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
  margin: 0 auto;
`;

const Project = styled.div`
  grid-column: ${({ index }) => ((index + 1) % 3 === 0 ? "span 2 /span 2" : 0)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10%;
  /* padding: 10%; */
`;
const Image = styled.img.attrs(({ image }) => ({
  src: image.url,
}))`
  z-index: 0;

  width: ${({ index }) => ((index + 1) % 3 === 0 ? "1000px" : "600px")};
  height: ${({ index }) => ((index + 1) % 3 === 0 ? "400px" : "100%")};
`;

const ProjectTitle = styled.div`
  position: absolute;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  font-size: 1.5rem;
  bottom: 0;
  text-align: center;
  height: 10%;
  width: 100%;
  /* padding-bottom: 5vh; */
  /* z-index: 1; */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  color: white;
`;

export default function Design() {
  return (
    <>
      <Page>
        <Navigation />
        <HeroDiv>
          <HeadingDiv>
            <GreekTitle>/dɪˈzʌɪn/</GreekTitle>
            <Title>DESIGN</Title>
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
