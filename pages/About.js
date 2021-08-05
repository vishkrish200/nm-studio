import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fetchAPI } from "../lib/api";

const Page = styled.div`
  background-color: black;
  height: 200vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
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
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 8rem;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  width: 50%;
`;

const TeamDiv = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const CardDiv = styled.div`
  display: grid;
  margin: auto;
`;
const Card = styled.div`
  background-color: #f1f9ff;
  min-width: 20%;
  min-height: 45%;
`;

const ProfilePicture = styled.div``;
const Name = styled.div`
  color: black;
`;

export default function About({ employees }) {
  return (
    <>
      <Page>
        <Navigation />
        <Hero>
          <TopSubTitle>A little more about</TopSubTitle>
          <Title>NM Studio</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet
          </SubTitle>
        </Hero>
        <TeamDiv>
          <Title>Meet the Team</Title>
          <CardDiv>
            {employees &&
              employees.map((employee, index) => (
                <Card>
                  <ProfilePicture></ProfilePicture>
                  <Name>{employee.Name}</Name>
                </Card>
              ))}
          </CardDiv>
        </TeamDiv>
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
