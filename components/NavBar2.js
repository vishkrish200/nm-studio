import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

const MenuDiv = styled.div`
  position: fixed;
  top: 2vh;
  right: 2vw;
  cursor: pointer;
  z-index: 1000;
`;

const NavDiv = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function NavBar2() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <AnimatePresence>
        <MenuDiv>
          <Hamburger
            toggled={click}
            toggle={handleClick}
            size={48}
            color="#ffffff"
            label="Show Menu"
            duration={0.8}
          />
        </MenuDiv>
        <NavDiv
          initial={{ x: "100%" }}
          exit={{ x: "100%" }}
          animate={{ x: click ? 0 : "100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        ></NavDiv>
      </AnimatePresence>
    </>
  );
}

export default NavBar2;
