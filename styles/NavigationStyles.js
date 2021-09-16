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

export const NavBackground = styled(motion.nav)`
  position: fixed;
  background-image: url("/NavBG.svg");
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  background-color: black;
  height: 100%;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  bottom: 15%;
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-auto-flow: row;
  list-style-type: none;
`;

export const ItemLink = styled(motion.div)`
  display: flex;
  font-size: 3.25rem;
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
