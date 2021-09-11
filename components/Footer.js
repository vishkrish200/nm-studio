import styled from "styled-components";
import Logo1 from "../Logo1";

import { FaceBookIcon, InstagramIcon, TwitterIcon } from "../public/Icons";

const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  min-height: 10%;
  margin-top: auto;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* margin: 10%; */
  gap: 2%;
`;

const Column = styled.div`
  margin-block: 5%;
`;

const SpecialColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(1, minmax(0, 0.75fr));
  grid-auto-flow: column;
`;

const Element = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  text-align: start;
  /* align-items: center; */
  margin-block: 1.5%;
`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <Columns>
          <Column>
            <Logo1 />
          </Column>
          <Column>
            <Element>About Us</Element>
            <Element>Contact</Element>
            <Element>Terms & Conditions</Element>
          </Column>
          <Column>
            <SpecialColumn>
              <Element>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.748"
                  height="18.667"
                  viewBox="0 0 9.748 18.667"
                >
                  <path
                    id="Path_38"
                    data-name="Path 38"
                    d="M86.326,18.667v-8.5h2.9l.415-3.319H86.326V4.77c0-.933.311-1.659,1.659-1.659h1.763V.1C89.333.1,88.3,0,87.156,0A4,4,0,0,0,82.9,4.356V6.844H80v3.319h2.9v8.5Z"
                    transform="translate(-80)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </Element>
              <Element>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.667"
                  height="18.667"
                  viewBox="0 0 18.667 18.667"
                >
                  <path
                    id="Path_40"
                    data-name="Path 40"
                    d="M9.333,1.659a28.618,28.618,0,0,1,3.733.1,4.81,4.81,0,0,1,1.763.311,3.642,3.642,0,0,1,1.763,1.763A4.81,4.81,0,0,1,16.9,5.6c0,.933.1,1.244.1,3.733a28.618,28.618,0,0,1-.1,3.733,4.81,4.81,0,0,1-.311,1.763,3.642,3.642,0,0,1-1.763,1.763,4.81,4.81,0,0,1-1.763.311c-.933,0-1.244.1-3.733.1A28.618,28.618,0,0,1,5.6,16.9a4.81,4.81,0,0,1-1.763-.311A3.642,3.642,0,0,1,2.074,14.83a4.81,4.81,0,0,1-.311-1.763c0-.933-.1-1.244-.1-3.733a28.618,28.618,0,0,1,.1-3.733,4.81,4.81,0,0,1,.311-1.763A3.725,3.725,0,0,1,2.8,2.8a1.753,1.753,0,0,1,1.037-.726A4.81,4.81,0,0,1,5.6,1.763a28.618,28.618,0,0,1,3.733-.1M9.333,0A30.642,30.642,0,0,0,5.5.1,6.4,6.4,0,0,0,3.215.519,4.06,4.06,0,0,0,1.556,1.556,4.06,4.06,0,0,0,.519,3.215,4.725,4.725,0,0,0,.1,5.5,30.642,30.642,0,0,0,0,9.333,30.642,30.642,0,0,0,.1,13.17a6.4,6.4,0,0,0,.415,2.281,4.06,4.06,0,0,0,1.037,1.659,4.06,4.06,0,0,0,1.659,1.037,6.4,6.4,0,0,0,2.281.415,30.642,30.642,0,0,0,3.837.1,30.642,30.642,0,0,0,3.837-.1,6.4,6.4,0,0,0,2.281-.415,4.351,4.351,0,0,0,2.7-2.7,6.4,6.4,0,0,0,.415-2.281c0-1.037.1-1.348.1-3.837a30.642,30.642,0,0,0-.1-3.837,6.4,6.4,0,0,0-.415-2.281,4.06,4.06,0,0,0-1.037-1.659A4.06,4.06,0,0,0,15.452.519,6.4,6.4,0,0,0,13.17.1,30.641,30.641,0,0,0,9.333,0m0,4.563a4.694,4.694,0,0,0-4.77,4.77,4.77,4.77,0,1,0,4.77-4.77m0,7.881A3.056,3.056,0,0,1,6.222,9.333,3.056,3.056,0,0,1,9.333,6.222a3.056,3.056,0,0,1,3.111,3.111,3.056,3.056,0,0,1-3.111,3.111m4.978-9.23a1.141,1.141,0,1,0,1.141,1.141,1.151,1.151,0,0,0-1.141-1.141"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </Element>
              <Element>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.667"
                  height="15.141"
                  viewBox="0 0 18.667 15.141"
                >
                  <path
                    id="Path_39"
                    data-name="Path 39"
                    d="M43.911,17.141A10.792,10.792,0,0,0,54.8,6.252V5.733a8.43,8.43,0,0,0,1.867-1.97,8.609,8.609,0,0,1-2.178.622,4.035,4.035,0,0,0,1.659-2.074,9.512,9.512,0,0,1-2.385.933A3.7,3.7,0,0,0,50.963,2a3.9,3.9,0,0,0-3.837,3.837,2.022,2.022,0,0,0,.1.83,10.722,10.722,0,0,1-7.881-4.044,3.972,3.972,0,0,0-.519,1.97,4.12,4.12,0,0,0,1.659,3.215,3.5,3.5,0,0,1-1.763-.519h0a3.79,3.79,0,0,0,3.111,3.733,3.2,3.2,0,0,1-1.037.1,1.765,1.765,0,0,1-.726-.1,3.929,3.929,0,0,0,3.63,2.7,7.83,7.83,0,0,1-4.77,1.659,2.871,2.871,0,0,1-.933-.1,9.788,9.788,0,0,0,5.911,1.867"
                    transform="translate(-38 -2)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </Element>
            </SpecialColumn>
          </Column>
          <Column>
            <Element style={{ lineHeight: "1.5" }}>
              497 Evergreen Rd. Roseville,
              <br /> CA 95673 <br />
              +44 345 678 903
            </Element>
          </Column>
        </Columns>
      </FooterDiv>
    </>
  );
}

export default Footer;
