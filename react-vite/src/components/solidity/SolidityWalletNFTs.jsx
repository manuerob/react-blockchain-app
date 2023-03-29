import { useNFTs, useContract, ThirdwebNftMedia, useAddress } from "@thirdweb-dev/react";

const SolidityWalletNFTs = () => {

    const address = useAddress();

    const { contract, isLoading } = useContract("0xAac04471056308E3859E098D1FD017A7bc9dE1Ca","nft-collection" );

    const { data: nfts, isLoading2} = useNFTs(contract);

    return (

        <section>

            Make sure you are connected!

            {(isLoading2 || isLoading)? (<p>
                Loading...
            </p>):(nfts?.filter(nft => nft.owner == address)?.map(nft => {
               return <div key={nft.metadata.id}>
                <ThirdwebNftMedia metadata={nft.metadata} 
                height="100px" 
                width="100px"
                style={{borderRadius: "10px"}}
                />
                <p>{nft.metadata.name}</p>
                </div>
            })
            )}

        </section>

    );
};

export default SolidityWalletNFTs;