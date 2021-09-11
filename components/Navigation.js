import { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Link from "next/link";
import Header from "./Header";
import { NavBackground, ItemLink, List } from "../styles/NavigationStyles";
import { AnimatePresence } from "framer-motion";

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
                <li key={NavItem.name}>
                  <Link href={NavItem.route}>
                    <ItemLink
                      whileHover={{ fontWeight: "1000", letterSpacing: "0px" }}
                      whileFocus={{ fontWeight: "1000", letterSpacing: "0px" }}
                    >
                      {NavItem.name}
                    </ItemLink>
                  </Link>
                </li>
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
