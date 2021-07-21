import Navigation from "../components/Navigation";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
`;

const ProjectHero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://source.unsplash.com/random");
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

const ProjectDescription = styled.div`
  width: 50%;
  color: white;
  text-align: center;
`;

function ProjectPage() {
  return (
    <>
      <Page>
        <Navigation />
        <ProjectHero>
          <ProjectTitle>PROJECT NAME</ProjectTitle>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum
          </ProjectDescription>
        </ProjectHero>
      </Page>
    </>
  );
}

export default ProjectPage;
