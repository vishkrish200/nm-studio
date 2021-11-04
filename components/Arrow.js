import styled from "styled-components";
import { motion } from "framer-motion";

const ArrowDiv = styled(motion.i)`
  border: solid white;
  border-width: 0 0.5vh 0.5vh 0;
  display: inline-block;
  margin-top: ${({ marginTop }) => marginTop};
  padding: 1%;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const ArrowDiv2 = styled(motion.div)`
  ::before {
    position: absolute;
    left: 50%;
  }

  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
  top: 50%;
  /* margin: -20px 0 0 -20px; */
  -webkit-transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;
  margin-top: ${({ marginTop }) => marginTop};

  ::before {
    content: "";
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
    @media (max-width: 480px) {
      width: 10px;
      height: 10px;
    }
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
`;

function Arrow({ marginTop }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <ArrowDiv2
      initial="hidden"
      variants={variants}
      animate={"visible"}
      transition={{
        duration: 0.7,
        delay: 0.9,
        fade: [0.6, 0.05, -0.01, 0.9],
      }}
      marginTop={marginTop}
    />
  );
}

export default Arrow;
