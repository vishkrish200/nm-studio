import Navigation from "../components/Navigation";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
  background-color: black;
`;

const GreekTitle = styled.h1`
  margin: 0;
  font-size: 10vh;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20vh;
  font-weight: 0;
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
  margin-top: 20vh;
  padding: 1vh;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export default function Art() {
  return (
    <>
      <MainDiv>
        <Navigation />
        <HeadingDiv>
          <GreekTitle>/ɑː(r)t/</GreekTitle>
          <Title>ART</Title>
          <SubTitle>noun</SubTitle>
          <Definition>Beautiful Functionality</Definition>
          <Arrow />
        </HeadingDiv>
      </MainDiv>
    </>
  );
}
