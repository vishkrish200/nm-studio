import styled from "styled-components";
import Image from "next/image";

const StyledLogo1 = styled.div`
  max-width: 100px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Logo1 = () => {
  return (
    <>
      <StyledLogo1>
        <Image
          src="/NM_Studio_Logo(OnBlack).png"
          layout="intrinsic"
          width={100}
          height={40}
          objectFit="contain"
          // objectPosition="left top"
        />
      </StyledLogo1>
    </>
  );
};

export default Logo1;
