import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function About() {
  return (
    <>
      <Navigation />
      <CenterDiv>
        <motion.h1
          animate={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          About Page
        </motion.h1>
      </CenterDiv>
    </>
  );
}
