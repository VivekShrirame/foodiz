import { FaFacebook, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  Link,
  Logo,
  NavLinks,
  SocialIcons,
  StyledNav,
  ThemeIcon,
} from "./NavBar.styles";

const NavBar = ({ toggleTheme, theme }) => {
  const NavItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={NavItems}>
        <StyledNav>
          <motion.ol variants={item}>
            <Logo>
              Food<span>iz</span>
            </Logo>
          </motion.ol>
          <NavLinks>
            <Link href="/">
              <motion.div variants={item}>All menus</motion.div>
            </Link>

            <Link href="/">
              <motion.div variants={item}>Delivery</motion.div>
            </Link>
            <Link href="/">
              <motion.div variants={item}>Bar</motion.div>
            </Link>
            <Link href="/">
              <motion.div variants={item}>Contact</motion.div>
            </Link>
          </NavLinks>
          <ThemeIcon onClick={toggleTheme} colorTheme={theme}>
            <motion.div variants={item}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </motion.div>
          </ThemeIcon>
          <SocialIcons>
            <motion.div variants={item}>
              <a href="/">
                <FaFacebook />
              </a>
            </motion.div>
            <motion.div variants={item}>
              <a href="/">
                <FaInstagram />
              </a>
            </motion.div>
          </SocialIcons>
        </StyledNav>
      </motion.div>
    </>
  );
};

export default NavBar;
