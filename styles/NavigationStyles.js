import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBackground = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 999;
`;

export const ItemLink = styled(motion.a)`
  display: inline-flexbox;
  font-size: 10vh;
  color: #ffffff;
  padding: 1vw 2vh;
  margin: 1vw 2vh;

  cursor: pointer;
  background-color: black;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #ffffff 50%
  );
  background-size: 240%;
  transition: all 0.5s;
  &:hover,
  &:active {
    background-position: 100%;
    color: black;
    transform: translateX(1vh);
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
