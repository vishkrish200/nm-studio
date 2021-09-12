import Navigation from "../components/Navigation";
import Link from "next/link";
import styled from "styled-components";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Footer";
import { getStrapiMedia } from "../lib/media";
import Arrow from "../components/Arrow";
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  WebIcon,
} from "../public/Icons";

const Page = styled.div`
  background-color: black;
  background-image: url("/Layer-0.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TopSubTitle = styled.div`
  font-size: 3.5rem;
  margin-top: 5%;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 8rem;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  @media (max-width: 768px) {
    font-size: 4.5rem;
    margin-bottom: 0%;
  }
`;

const SubTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  width: 60%;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const TeamDiv = styled.div`
  /* display: flex; */
  /* align-items: center; */
  text-align: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  /* width: 100%; */
`;

const CardsDiv = styled.div`
  display: grid;
  text-align: center;
  /* width: 80%; */
  margin-inline: 10%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  /* gap: 1.5%; */
  margin: 10% 2.5%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 5% 2.5%;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 5% 2.5%;
  }
  /* @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 5% 2.5%;
  } */
`;
const Card = styled.div`
  margin: 2.5%;
  background-color: #f1f9ff;
  min-width: 300px;
  min-height: 500px;
  position: relative;
`;

const ProfilePicture = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10%;
  min-height: 100px;
  height: 100px;
`;
const Name = styled.div`
  position: absolute;
  font-size: 1.3rem;
  bottom: 24%;
  left: 0;
  right: 0;
  color: black;
`;

const Role = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: 20%;
  left: 0;
  right: 0;
  color: black;
  text-transform: uppercase;
`;

const Links = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20%;
  right: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default function About({ employees, categories }) {
  return (
    <>
      <Navigation categories={categories} />
      <Page>
        <Hero>
          <TopSubTitle>A little more about</TopSubTitle>
          <Title marginBottom={"0%"}>NM Studio</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </SubTitle>
          <Arrow marginTop={"10%"} />
        </Hero>
        <TeamDiv>
          <Title marginBottom={"10%"}>Meet the Team</Title>
          <CardsDiv>
            {employees &&
              employees.map((employee) => (
                <Card>
                  <ProfilePicture>
                    <img
                      src={getStrapiMedia(employee.ProfilePicture)}
                      width="60%"
                      height="200px"
                    />
                  </ProfilePicture>
                  <Name>{employee.Name}</Name>
                  <Role>{employee.Role}</Role>
                  {employee.SocialLinks &&
                    employee.SocialLinks.map((SocialLink) => (
                      <Links>
                        <Link
                          href={`https://${SocialLink.InstagramLink}`}
                          passHref
                        >
                          <a>
                            <InstagramIcon />
                          </a>
                        </Link>
                        <Link
                          href={`https://${SocialLink.FacebookLink}`}
                          passHref
                        >
                          <a>
                            <FaceBookIcon />
                          </a>
                        </Link>
                        <Link
                          href={`https://${SocialLink.TwitterLink}`}
                          passHref
                        >
                          <a>
                            <TwitterIcon />
                          </a>
                        </Link>
                        <Link
                          href={`https://${SocialLink.WebsiteLink}`}
                          passHref
                        >
                          <a>
                            <WebIcon />
                          </a>
                        </Link>
                      </Links>
                    ))}
                </Card>
              ))}
          </CardsDiv>
        </TeamDiv>
        <Footer />
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const employees = await fetchAPI("/employees");
  return {
    props: {
      employees,
    },
  };
}
