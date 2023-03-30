import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { userSession } from './ConnectWallet';
import { uintCV } from '@stacks/transactions';
import { StacksTestnet } from 'micro-stacks/network'
import { callReadOnlyFunction } from 'micro-stacks/transactions'
import { styles } from '../../styles';

const contractAddress = 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J';
const network = new StacksTestnet();


function ClarityReadOnly() {

  const [showComponent, setShowComponent] = useState(false);
  const [tokenId, setTokenId] = useState('');

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  async function GetNFTs() {

    const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const imgs = [];
  
    for (const tokenId of tokenIds) {
      const rawUri = await GetTokenUri(tokenId);
      const uri = parseString(rawUri, tokenId);
      console.log(uri);

      imgs.push(await getImageFromURI(uri));
    }

    return(
      imgs?.map((img) =>
        (<img src={{img}}>
        
        </img>)));
  }

  function GetNFTs2() {

    const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    return(

      <div>
        <p>Pumpkin Piezzz</p>
        <section className="grid grid-rows-5 grid-flow-col">

        {tokenIds?.map((token) => (
          <img
            src={`https://gateway.pinata.cloud/ipfs/QmYrjPLCqY1sZxjvDdUpXxb6hWFd4LRtPGthMrQ73PFVaV/${token}.png`}
            key={token}
          />
        ))}
      </section>
      </div>
      
    );
  }

  function parseString(inputStr, tokenId) {
    // Remove "ipfs://" from the beginning of the string
    let parsedStr = inputStr.replace("ipfs://", "");
  
    // Replace "{id}" with the actual token ID
    parsedStr = parsedStr.replace("{id}", tokenId.toString());
  
    // Return the parsed string
    return parsedStr;
  }

  function getImageFromURI(uri){

    let img = "";

    fetch("https://gateway.pinata.cloud/" + uri)
    .then(response => response.json())
    .then(data => {
      img = data.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");

      console.log(img);
     
    })
    .catch(error => console.error(error));

    console.log(img);

    return img;

  }


  async function GetTokenUri(token_id) {
    const userAddress = userSession.loadUserData().profile.stxAddress.testnet;
  
    const options = {
      contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
        contractName: 'pumpkin-piezzz',
        functionName: 'get-token-uri',
        functionArgs: [uintCV(token_id)],
        network: network,
        senderAddress: userAddress,
    };
    const response = await callReadOnlyFunction(options);
    const rawURI = response.value.value.data;
  
    return rawURI;
  }
  

  async function GetLastTokenID() {
    const userAddress = userSession.loadUserData().profile.stxAddress.testnet;

    const options = {
      contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
        contractName: 'pumpkin-piezzz',
        functionName: 'get-last-token-id',
        functionArgs: [],
        network: network,
        senderAddress: userAddress,
    };
    const response = await callReadOnlyFunction(options);

    console.log(response);
  }

  async function GetOwner() {
    const userAddress = userSession.loadUserData().profile.stxAddress.testnet;
  
    const options = {
      contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
        contractName: 'pumpkin-piezzz',
        functionName: 'get-owner',
        functionArgs: [uintCV(tokenId)],
        network: network,
        senderAddress: userAddress,
    };
    const response = await callReadOnlyFunction(options);
    const rawURI = response.value.value.data;

    console.log(rawURI);
  }

  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>Show NFTs</button>
      {showComponent && <GetNFTs2 />}
      <br />
      <label>
        Token ID:
        <input type="uint" value={tokenId} onChange={e => setTokenId(e.target.value)} />
      </label>

      <button className={styles.btn} onClick={GetLastTokenID}>LAST ID</button>
      <button className={styles.btn} onClick={GetOwner}>Owner</button>

      
    </div>
  );
}

export default ClarityReadOnly;
