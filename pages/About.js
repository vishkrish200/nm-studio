import Navigation from "../components/Navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Footer";
import { getStrapiMedia } from "../lib/media";

const Page = styled.div`
  background-color: black;
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
  margin-top: 5%; 
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

const Arrow = styled.i`
  border: solid white;
  border-width: 0 0.8vh 0.8vh 0;
  display: inline-block;
  margin-top: 10vh;
  padding: 0.5rem;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
const TeamDiv = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const CardDiv = styled.div`
  display: grid;
  /* align-items: center; */
  text-align: center;
  /* justify-content: space-around; */
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Card = styled.div`
  margin: 10%;
  /* padding: auto; */
  background-color: #f1f9ff;
  min-width: 200px;
  min-height: 350px;
  position: relative;
`;

const ProfilePicture = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10%;
`;
const Name = styled.div`
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 70%;
  color: black;
`;

const Role = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 80%;
  color: black;
`;

const Links = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default function About({ employees, categories }) {
  return (
    <>
      <Navigation categories={categories} />
      <Page>
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
          <Arrow />
        </Hero>
        <TeamDiv>
          <Title>Meet the Team</Title>
          <CardDiv>
            {employees &&
              employees.map((employee) => (
                <Card>
                  <ProfilePicture>
                    <img
                      src={getStrapiMedia(employee.ProfilePicture)}
                      width="50%"
                    />
                  </ProfilePicture>
                  <Name>{employee.Name}</Name>
                  <Role>{employee.Role}</Role>
                  {employee.SocialLinks &&
                    employee.SocialLinks.map((SocialLink) => (
                      <Links>
                        <a href={`https://${SocialLink.InstagramLink}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <defs>
                              <clipPath id="clip-path">
                                <rect width="20" height="20" fill="none" />
                              </clipPath>
                            </defs>
                            <g id="Instagram" clip-path="url(#clip-path)">
                              <path
                                id="Path_3"
                                data-name="Path 3"
                                d="M9.806,1.743a30.067,30.067,0,0,1,3.922.109,5.053,5.053,0,0,1,1.852.327,3.826,3.826,0,0,1,1.852,1.852,5.053,5.053,0,0,1,.327,1.852c0,.981.109,1.307.109,3.922a30.067,30.067,0,0,1-.109,3.922,5.053,5.053,0,0,1-.327,1.852,3.826,3.826,0,0,1-1.852,1.852,5.053,5.053,0,0,1-1.852.327c-.981,0-1.307.109-3.922.109a30.067,30.067,0,0,1-3.922-.109,5.053,5.053,0,0,1-1.852-.327A3.826,3.826,0,0,1,2.179,15.58a5.053,5.053,0,0,1-.327-1.852c0-.981-.109-1.307-.109-3.922a30.067,30.067,0,0,1,.109-3.922,5.053,5.053,0,0,1,.327-1.852,3.913,3.913,0,0,1,.763-1.09,1.842,1.842,0,0,1,1.09-.763,5.053,5.053,0,0,1,1.852-.327,30.067,30.067,0,0,1,3.922-.109M9.806,0A32.193,32.193,0,0,0,5.775.109a6.726,6.726,0,0,0-2.4.436,4.265,4.265,0,0,0-1.743,1.09A4.265,4.265,0,0,0,.545,3.378a4.964,4.964,0,0,0-.436,2.4A32.193,32.193,0,0,0,0,9.806a32.193,32.193,0,0,0,.109,4.031,6.726,6.726,0,0,0,.436,2.4,4.265,4.265,0,0,0,1.09,1.743,4.265,4.265,0,0,0,1.743,1.09,6.726,6.726,0,0,0,2.4.436,32.193,32.193,0,0,0,4.031.109,32.193,32.193,0,0,0,4.031-.109,6.726,6.726,0,0,0,2.4-.436,4.571,4.571,0,0,0,2.833-2.833,6.726,6.726,0,0,0,.436-2.4c0-1.09.109-1.416.109-4.031A32.193,32.193,0,0,0,19.5,5.775a6.726,6.726,0,0,0-.436-2.4,4.265,4.265,0,0,0-1.09-1.743A4.265,4.265,0,0,0,16.234.545a6.726,6.726,0,0,0-2.4-.436A32.193,32.193,0,0,0,9.806,0m0,4.794A4.931,4.931,0,0,0,4.794,9.806,5.012,5.012,0,1,0,9.806,4.794m0,8.281A3.21,3.21,0,0,1,6.537,9.806,3.21,3.21,0,0,1,9.806,6.537a3.21,3.21,0,0,1,3.269,3.269,3.21,3.21,0,0,1-3.269,3.269m5.23-9.7a1.2,1.2,0,1,0,1.2,1.2,1.209,1.209,0,0,0-1.2-1.2"
                                fill="#535353"
                                fill-rule="evenodd"
                              />
                            </g>
                          </svg>
                        </a>
                        <a href={`https://${SocialLink.FacebookLink}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="10.242"
                            height="19.612"
                            viewBox="0 0 10.242 19.612"
                          >
                            <defs>
                              <clipPath id="clip-path">
                                <rect
                                  width="10.242"
                                  height="19.612"
                                  fill="none"
                                />
                              </clipPath>
                            </defs>
                            <g id="Facebook" clip-path="url(#clip-path)">
                              <path
                                id="Path_1"
                                data-name="Path 1"
                                d="M86.646,19.612V10.677H89.7l.436-3.487H86.646V5.012c0-.981.327-1.743,1.743-1.743h1.852V.109C89.806.109,88.716,0,87.518,0a4.206,4.206,0,0,0-4.467,4.576V7.191H80v3.487h3.051v8.934Z"
                                transform="translate(-80)"
                                fill="#535353"
                                fill-rule="evenodd"
                              />
                            </g>
                          </svg>
                        </a>
                        <a href={`https://${SocialLink.TwitterLink}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="19.612"
                            height="15.907"
                            viewBox="0 0 19.612 15.907"
                          >
                            <defs>
                              <clipPath id="clip-path">
                                <rect
                                  width="19.612"
                                  height="15.907"
                                  fill="none"
                                />
                              </clipPath>
                            </defs>
                            <g id="Twitter" clip-path="url(#clip-path)">
                              <path
                                id="Path_2"
                                data-name="Path 2"
                                d="M44.21,17.907a11.338,11.338,0,0,0,11.44-11.44V5.922a8.856,8.856,0,0,0,1.961-2.07,9.044,9.044,0,0,1-2.288.654,4.239,4.239,0,0,0,1.743-2.179,9.994,9.994,0,0,1-2.506.981A3.891,3.891,0,0,0,51.619,2a4.094,4.094,0,0,0-4.031,4.031A2.124,2.124,0,0,0,47.7,6.9a11.265,11.265,0,0,1-8.281-4.249,4.173,4.173,0,0,0-.545,2.07A4.329,4.329,0,0,0,40.615,8.1a3.673,3.673,0,0,1-1.852-.545h0a3.982,3.982,0,0,0,3.269,3.922,3.359,3.359,0,0,1-1.09.109,1.854,1.854,0,0,1-.763-.109,4.128,4.128,0,0,0,3.813,2.833,8.226,8.226,0,0,1-5.012,1.743A3.016,3.016,0,0,1,38,15.946a10.284,10.284,0,0,0,6.21,1.961"
                                transform="translate(-38 -2)"
                                fill="#535353"
                                fill-rule="evenodd"
                              />
                            </g>
                          </svg>
                        </a>
                        <a href={`https://${SocialLink.WebsiteLink}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <defs>
                              <clipPath id="clip-path">
                                <rect width="20" height="20" fill="none" />
                              </clipPath>
                            </defs>
                            <g id="web" clip-path="url(#clip-path)">
                              <path
                                id="Path_4"
                                data-name="Path 4"
                                d="M2.942,2.942A8.9,8.9,0,0,1,9.806,0,8.9,8.9,0,0,1,16.67,2.942a8.9,8.9,0,0,1,2.942,6.864A8.9,8.9,0,0,1,16.67,16.67a8.9,8.9,0,0,1-6.864,2.942A8.9,8.9,0,0,1,2.942,16.67,9.786,9.786,0,0,1,0,9.806,8.9,8.9,0,0,1,2.942,2.942Zm8.172,14.709a4.015,4.015,0,0,0,2.451-1.471,7.138,7.138,0,0,0,1.144-3.432,2.706,2.706,0,0,0-.817-1.961,2.877,2.877,0,0,0-2.125-.981H10.133a4.772,4.772,0,0,1-1.471-.327,1.484,1.484,0,0,1-.49-1.144A.849.849,0,0,1,8.5,7.681a1.239,1.239,0,0,1,.654-.327,1.115,1.115,0,0,1,.817.49c.327.163.49.327.654.327a.983.983,0,0,0,.654-.163.983.983,0,0,0,.163-.654,2.6,2.6,0,0,0-.817-1.634,6.76,6.76,0,0,0,.817-3.105.352.352,0,0,0-.327-.327,5.052,5.052,0,0,0-1.307-.327A8.175,8.175,0,0,0,5.557,3.269,4.115,4.115,0,0,0,4.086,6.537,4.185,4.185,0,0,0,5.393,9.642,4.465,4.465,0,0,0,8.5,10.95h0V11.6a2.1,2.1,0,0,0,.654,1.634,2.38,2.38,0,0,0,1.471.981V17.16c0,.163,0,.163.163.327S10.95,17.651,11.113,17.651Z"
                                fill="#535353"
                              />
                            </g>
                          </svg>
                        </a>
                      </Links>
                    ))}
                </Card>
              ))}
          </CardDiv>
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
