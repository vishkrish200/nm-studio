import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styled from "styled-components";
import Link from "next/link";

const Page = styled.div`
  background-color: black;
  height: 200vh;
  background-image: url("/Layer-0.png");
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
  font-weight: bold;
`;

const Address = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;
  line-height: 8vh;
`;

const MapDiv = styled.div`
  margin: auto;
  height: 80vh;
  width: 80%;
  background-image: url("/WhatsApp Image 2021-07-03 at 10.01.23 AM.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Contact({ categories }) {
  return (
    <>
      <Page>
        <HeroDiv>
          <Navigation categories={categories} />
          <Title style={{ marginBottom: "5%" }}>Get In Touch</Title>
          <Address>
            johndoe@nmstudio.com <br />
            329 14th Cross Rd, Sadashiva Nagar,
            <br />
            Bengaluru, Karnataka 560080 <br />
            +44 345 678 903
          </Address>
        </HeroDiv>
        <Title style={{ marginBottom: "5%" }}>Locate Us</Title>
        <Link
          href="https://www.google.com/maps?q=13.007887840270996,77.58053588867188&z=17&hl=en"
          passHref
        >
          <a style={{ cursor: "pointer" }}>
            <MapDiv />
          </a>
        </Link>
      </Page>
      <Footer />
    </>
  );
}
