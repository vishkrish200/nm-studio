import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBackground = styled(motion.nav)`
  position: fixed;
  background-image: url("/NavBG.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  right: 0;
  background-color: black;
  height: 100vh;
  width: 50vw;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ItemLink = styled(motion.a)`
  display: inline-flexbox;
  font-size: 3.25rem;
  color: white;
  padding: 2%;
  margin-block: 4%;
  cursor: pointer;
`;

export const List = styled.ul`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  list-style-type: none;
  text-align: center;
`;
