import styled from "styled-components";
import { motion } from "framer-motion";

export const TopNav = styled(motion.nav)`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 10%;
  z-index: 1000;
`;

export const MenuDiv = styled.div`
  position: fixed;
  top: 2vh;
  right: 2vw;
  cursor: pointer;
`;

export const LogoDiv = styled.div`
  position: fixed;
  padding-top: 1%;
  top: 2%;
  left: 2%;
  cursor: pointer;
`;
