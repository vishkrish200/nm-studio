import styled from "styled-components";
import { motion } from "framer-motion";

export const TopNav = styled(motion.nav)`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  z-index: 1000;
`;

export const MenuDiv = styled.div`
  position: fixed;
  top: 2vh;
  right: 2vw;
  cursor: pointer;
  z-index: 1001;
`;

export const LogoDiv = styled.div`
  position: fixed;
  top: 2vh;
  left: 2vw;
  cursor: pointer;
  padding-top: 0.05%;
`;
