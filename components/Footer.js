import styled from "styled-components";
import Logo1 from "../Logo1";

const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterDiv>
      <Logo1 />
      This is the Footer
    </FooterDiv>
  );
}

export default Footer;
