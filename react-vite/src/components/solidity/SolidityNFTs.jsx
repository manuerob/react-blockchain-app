import { useNFTs, useContract } from "@thirdweb-dev/react";



const SolidityNFTs = () => {

    const { contract, isLoading, error } = useContract("0xAac04471056308E3859E098D1FD017A7bc9dE1Ca","nft-collection" );

    const { data: nfts, isLoading2, error2 } = useNFTs(contract);
    console.log(contract);
    console.log(isLoading + error);
    console.log(nfts);
    console.log(isLoading2 + error2);
    return (

        <section>

            {nfts?.map(nft => {
               return (nft.metadata.name); 
            })}

        </section>

    );
};

export default SolidityNFTs;