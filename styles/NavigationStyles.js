import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBackground = styled(motion.nav)`
  position: fixed;
  background-image: url("/NavBG.svg");
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  background-color: black;
  height: 100vh;
  width: 50vw;
  @media (max-width: 768px) {
    width: 100%;
  }
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemLink = styled(motion.div)`
  display: flex;
  font-size: 3.25rem;
  color: white;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  bottom: 15%;
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  list-style-type: none;
  text-align: center;
`;
