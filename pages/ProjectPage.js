import Navigation from "../components/Navigation";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  margin: 5%;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const textfields = [
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum",
  },
];

const Images = [
  { url: "https://source.unsplash.com/random" },
  { url: "https://source.unsplash.com/random" },
  { url: "https://source.unsplash.com/random" },
];

function ProjectPage() {
  return (
    <>
      <Page>
        <Navigation />
        <ProjectHero>
          <ProjectTitle>PROJECT NAME</ProjectTitle>
          <ProjectSubtitle>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum
          </ProjectSubtitle>
        </ProjectHero>
        {textfields &&
          textfields.map((textfield) => (
            <>
              <ProjectDescription>{textfield.description}</ProjectDescription>
              <PictureGallery>
                {Images &&
                  Images.map((Image, index) => (
                    <Picture index={index}>
                      <img
                        src={Image.url}
                        width={index == 0 ? "400px" : "200px"}
                      />
                    </Picture>
                  ))}
              </PictureGallery>
            </>
          ))}
      </Page>
    </>
  );
}

export default ProjectPage;
