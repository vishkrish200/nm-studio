import { Cross as Hamburger } from "hamburger-react";
import Logo1 from "../Logo1";
import { TopNav, MenuDiv, LogoDiv } from "../styles/HeaderStyles";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header({ sidebarOpen, handleClick }) {

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <>
      <TopNav
        initial={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        animate={{
          y: lastYPos == 0 ? 0 : shouldShowActions ? 0 : "-100%",
        }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <LogoDiv>
          <Link href="/">
            <a>
              <Logo1 />
            </a>
          </Link>
        </LogoDiv>

        <MenuDiv>
          <Hamburger
            toggled={sidebarOpen}
            toggle={handleClick}
            size={48}
            color="#ffffff"
            label="Show Menu"
            duration={0.8}
          />
        </MenuDiv>
      </TopNav>
    </>
  );
}

export default Header;
