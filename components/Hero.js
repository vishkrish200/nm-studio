import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const HeroImage = styled.div`
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  height: 100vh;
  z-index: 500;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeroTitle = styled(motion.div)`
  color: white;
  font-size: 10rem;
  text-align: center;
  font-weight: lighter;
  overflow-wrap: break-word;
  line-height: 1;
  padding-bottom: 2vh;
`;

const HeroSubTitle = styled(motion.div)`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-weight: lighter;
  overflow-wrap: break-word;
  width: 50%;
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

export default function Hero() {
  return (
    <>
      <HeroImage>
        <HeroTitle
          initial="hidden"
          variants={variants}
          animate={"visible"}
          transition={{ duration: 0.7, fade: [0.6, 0.05, -0.01, 0.9] }}
        >
          {/* {" "} */}
          We Are
          <br />
          <b> NM Studio</b>
        </HeroTitle>
        <HeroSubTitle
          initial="hidden"
          variants={variants}
          animate={"visible"}
          transition={{
            duration: 0.7,
            delay: 0.5,
            fade: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et
        </HeroSubTitle>
      </HeroImage>
    </>
  );
}
