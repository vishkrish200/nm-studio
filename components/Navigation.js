import { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Link from "next/link";
import Header from "./Header";
import { NavBackground, ItemLink, List } from "../styles/NavigationStyles";
import { AnimatePresence } from "framer-motion";

function Navigation() {
  const Items = [
    { route: "Art", text: "Art" },
    { route: "Architecture", text: "Architecture" },
    { route: "Design", text: "Design" },
    { route: "About", text: "About Us" },
    { route: "Contact", text: "Get In Touch" },
  ];

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
            {Items &&
              Items.map((Item) => (
                <li>
                  <Link href={`/${Item.route}`}>
                    <ItemLink
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {Item.text}
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
