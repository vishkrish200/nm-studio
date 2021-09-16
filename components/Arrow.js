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
function Arrow({ marginTop }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <ArrowDiv
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