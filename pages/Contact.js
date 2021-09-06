import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
  height: 200vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroDiv = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 8.25rem;
`;

const Address = styled.div`
  color: white;
  text-align: center;
  font-size: 2.25rem;
  line-height: 8vh;
`;

export default function Contact({ categories }) {
  return (
    <>
      <Page>
        <HeroDiv>
          <Navigation categories={categories} />
          <Title>Get In Touch Page</Title>
          <Address>
            johndoe@nmstudio.com <br />
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903
          </Address>
        </HeroDiv>
        <Title>Locate Us</Title>
      </Page>
      <Footer  />
    </>
  );
}
