import styled from "styled-components";
import Hero from "./Hero";
import Link from "next/link";

const Items = [
  { route: "Art", text: "Art" },
  { route: "Design", text: "Design" },
  { route: "Architecture", text: "Architecture" },
];

const Page = styled.div`
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200vh;
`;

const SecondHalf = styled.div`
  /* width: 100%; */
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
`;
const Categories = styled.a`
  margin: auto 0;
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  height: 50vh;
  padding-left: 2vw;
  margin-left: 1vw;
  width: 50%;
  border-left-style: solid;
  border-color: red;
`;

function HomePage2() {
  return (
    <>
      <Page>
        <Hero />
        <SecondHalf>
          <LeftBox>
            {Items &&
              Items.map((Item) => (
                <Categories>
                  <Link href={`/Category/${Item.route}`}>{Item.text}</Link>
                </Categories>
              ))}
          </LeftBox>
          <RightBox>Design is Everything</RightBox>
        </SecondHalf>
      </Page>
    </>
  );
}

export default HomePage2;
