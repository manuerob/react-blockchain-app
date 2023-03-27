import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={styles.sectionText}
      >
        This project has been created to try out some cool Web3 technologies like play-to-earn games, smart contracts, NFTs.

        The goal is also to develop the website with great DevOps and SRE practices like CI/CD pipelines, 
        infrastucture as code (IaC) and monitoring tools integration.

        Eventually, I would like to add a tutorial section, to explain how everything has been coded.
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
