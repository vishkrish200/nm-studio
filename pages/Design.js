import Navigation from "../components/Navigation";
import styled from "styled-components";

const Title = styled.h1`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Design() {
  return (
    <div>
      <Navigation />
      <Title>Design Page</Title>
    </div>
  );
}
