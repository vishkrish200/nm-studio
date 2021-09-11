import styled from "styled-components";
import Hero from "./Hero";
import Link from "next/link";

const Page = styled.div`
  background-color: black;
  background-image: url("/Layer-0.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200vh;
`;

const SecondHalf = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
`;

const LeftBox = styled.div`
  padding-right: 2vw;
  margin-right: 1vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;
  height: 40vh;
  border-right-style: solid;
  border-color: white;
  text-align: right;
  font-size: 2.25rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Categories = styled.a`
  margin: auto 0;
  margin-right: 5%;
  color: white;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  height: 60vh;
  padding-left: 5%;
  margin-left: 1%;
  width: 50%;
  border-left-style: solid;
  border-color: red;
  font-size: 2.25rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 40%;
  }
`;

export default function HomePage2({ categories }) {
  return (
    <>
      <Page>
        <Hero />
        <SecondHalf>
          <LeftBox>
            {categories &&
              categories.map((category) => (
                <Link
                  key={category.Name}
                  href={`/Category/${category.Name}`}
                  passHref
                >
                  <Categories>{category.Name}</Categories>
                </Link>
              ))}
          </LeftBox>
          <RightBox>Design is Everything</RightBox>
        </SecondHalf>
      </Page>
    </>
  );
}
