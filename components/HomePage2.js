import styled from "styled-components";
import Hero from "./Hero";

function HomePage2() {
  const Categories = styled.div`
    width: 100%;
  `;

  return (
    <>
      <Hero />
      <Categories />
      <div></div>
    </>
  );
}

export default HomePage2;
