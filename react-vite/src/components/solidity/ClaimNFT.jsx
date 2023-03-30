import { Web3Button } from "@thirdweb-dev/react";

const ClaimNFT = () => {
  return (
    <Web3Button colorMode="light" accentColor="#9702c4" contractAddress="0xAac04471056308E3859E098D1FD017A7bc9dE1Ca" action={(contract) =>{
        contract.erc721.claim(1);
    }}>Claim a Spook!</Web3Button>
  );
};

export default ClaimNFT;