import { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Link from "next/link";
import Header from "./Header";
import { NavBackground, ItemLink, List } from "../styles/NavigationStyles";
import { AnimatePresence } from "framer-motion";

function Navigation({ categories }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebarOpen = () => setSidebarOpen(!sidebarOpen);

  Navigation.handleClickOutside = () => setSidebarOpen(false);

  return (
    <>
      <Header sidebarOpen={sidebarOpen} handleClick={toggleSidebarOpen} />
      <AnimatePresence>
        <NavBackground
          initial={{ x: "100%" }}
          exit={{ x: "-100%" }}
          animate={{ x: sidebarOpen ? 0 : "100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <List>
            {categories &&
              categories.map((category) => (
                <li>
                  <Link href={`/Category/${category.Name}`}>
                    <ItemLink whileHover={{ scale: 1.5 }}>
                      {category.Name}
                    </ItemLink>
                  </Link>
                </li>
              ))}
            <Link href={"/About"}>
              <ItemLink whileHover={{ scale: 1.5 }}>About Us</ItemLink>
            </Link>
            <Link href={"/Contact"}>
              <ItemLink whileHover={{ scale: 1.5 }}>Get In Touch</ItemLink>
            </Link>
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
