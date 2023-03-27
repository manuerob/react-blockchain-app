import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import ConnectWallet from "./ConnectWallet";
import ContractHello from "./ContractHello";

const ClaritySection = () => {

  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Built for Bitcoin and Stacks</p>
        <h3 className={styles.sectionHeadText}>Clarity Playground</h3>


        <ConnectWallet />
        <ContractHello />

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ClaritySection, "clarity_section");