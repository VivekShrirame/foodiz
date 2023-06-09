import { FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import {
  ContactIcons,
  HeroContent,
  ImageContainer,
  PhoneIcon,
  StyledButtons,
  StyledHeroSection,
} from "./HeroSection.styles";
import { motion } from "framer-motion";

const HeroSection = () => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={HeroItems}>
        <StyledHeroSection>
          <HeroContent>
            <motion.div variants={item}>
              <h2>
                Spring in
                <span>Foodiz</span>
              </h2>
            </motion.div>
            <motion.div variants={item}>
              <p>The most delicious outdoor food</p>
            </motion.div>
            <StyledButtons>
              <motion.div variants={item}>
                <button>Capacity</button>
              </motion.div>
              <motion.div variants={item}>
                <button>Location</button>
              </motion.div>
              <motion.div variants={item}>
                <button>Seat type</button>
              </motion.div>
            </StyledButtons>
          </HeroContent>
          <ContactIcons>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a href="/">
                <FaRegEdit />
              </a>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <PhoneIcon href="/">
                <FaPhoneAlt />
              </PhoneIcon>
            </motion.div>
          </ContactIcons>
          <ImageContainer>
            <motion.img
              variants={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 1, x: 0 },
              }}
              src="./images/foodillustration.png"
              alt="food"
            ></motion.img>
          </ImageContainer>
        </StyledHeroSection>
      </motion.div>
    </>
  );
};

export default HeroSection;
