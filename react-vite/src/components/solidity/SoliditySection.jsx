import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import UnityGame from "../UnityGame";
import SolidityWallet from "./SolidityWallet";
import SolidityNFTs from "./SolidityNFTs";
import SolidityWalletNFTs from "./SolidityWalletNFTs";
import ClaimNFT from "./ClaimNFT";

const SoliditySection = () => {

  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <SolidityWallet />
        <p>NFTs</p>
        <SolidityNFTs />

        <p>Your NFTs from this collection</p>
        <SolidityWalletNFTs />
        <ClaimNFT />
        <p className={styles.sectionSubText}>Built for Ethereum</p>
        <h3 className={styles.sectionHeadText}>Solidity Playground</h3>
        <UnityGame />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(SoliditySection, "solidity_section");