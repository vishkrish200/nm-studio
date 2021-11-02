import onClickOutside from "react-onclickoutside";
import Link from "next/link";
import {
  TopNav,
  MenuDiv,
  LogoDiv,
  NavBackground,
  ItemLink,
  List,
  ListItem,
} from "@/styles/NavigationStyles";
import { AnimatePresence } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import Logo1 from "../Logo1";
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
    <TopNav
      initial={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      animate={{
        y: lastYPos == 0 ? 0 : shouldShowActions ? 0 : "-100%",
      }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <LogoDiv>
        <Link key="Home" href="/" passHref>
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
  );
}

function Navigation({ categories }) {
  const NavItems = [];

  categories &&
    categories.map((category) => {
      NavItems.push({
        name: category.Name,
        route: `/Category/${category.Name}`,
      });
    });
  NavItems.push({
    name: "About Us",
    route: "/About",
  });
  NavItems.push({
    name: "Get In Touch",
    route: "/Contact",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebarOpen = () => setSidebarOpen(!sidebarOpen);

  Navigation.handleClickOutside = () => setSidebarOpen(false);

  return (
    <>
      <Header sidebarOpen={sidebarOpen} handleClick={toggleSidebarOpen} />
      <AnimatePresence>
        <NavBackground
          initial={{ x: "100%" }}
          animate={{ x: sidebarOpen ? 0 : "100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <List>
            {NavItems &&
              NavItems.map((NavItem) => (
                <ListItem
                  key={NavItem.name}
                  whileHover={{ fontWeight: "1000", letterSpacing: "0px" }}
                  whileFocus={{ fontWeight: "1000", letterSpacing: "0px" }}
                >
                  <Link href={NavItem.route} passHref>
                    <ItemLink>{NavItem.name}</ItemLink>
                  </Link>
                </ListItem>
              ))}
          </List>
        </NavBackground>
      </AnimatePresence>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Navigation.handleClickOutside,
};

export default onClickOutside(Navigation, clickOutsideConfig);
