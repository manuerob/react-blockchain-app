import React from "react";
import { styles } from "../../styles";

import { SectionWrapper } from "../../hoc";
import SolidityWallet from "./SolidityWallet";
import SolidityNFTs from "./SolidityNFTs";
import SolidityWalletNFTs from "./SolidityWalletNFTs";
import ClaimNFT from "./ClaimNFT";

const AllSolidityNFTs = () => {

  return (
    <div>
        <SolidityWallet />
        <br />
        <p className={styles.sectionSubText}>All Spooks NFTs</p>
        <SolidityNFTs />

        <br />
        <p className={styles.sectionSubText}>Your NFTs from this collection</p>
        <SolidityWalletNFTs />

        <br />
        <p className={styles.sectionSubText}>Claim your NFT!</p>
        <ClaimNFT />
    </div>
  );
};

export default SectionWrapper(AllSolidityNFTs, "all_solidity_nfts");