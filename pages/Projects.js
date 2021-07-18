import styled from "styled-components";
import Navigation from "../components/Navigation";

const Title = styled.h1`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Categories = [
  { text: "Art" },
  { text: "Architecture" },
  { text: "Design" },
];

export default function Projects({ projects }) {
  return (
    <div>
      <Navigation />
      <Title>Projects Page</Title>

      {/* <MainDiv>
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <h1>{project.title}</h1>
            </div>
          ))}
      </MainDiv> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/projects");
//   const projects = await res.json();

//   return { props: { projects } };
// }
