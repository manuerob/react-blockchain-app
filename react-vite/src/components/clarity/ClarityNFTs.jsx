import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { userSession } from './ConnectWallet';
import { uintCV, principalCV } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

const contractAddress = 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J';
const network = new StacksTestnet();


function ClarityNFTs() {
const { doContractCall } = useConnect();
  const [tokenId, setTokenId] = useState('');
  const [result, setResult] = useState('');

  async function useHandleClaimHey() {
    const address = userSession.loadUserData().profile.stxAddress.testnet;
  
    const options = {
      contractAddress: 'ST21FTC82CCKE0YH9SK5SJ1D4XEMRA069FKV0VJ8N',
        contractName: 'hey-final',
        functionName: 'request-hey',
        functionArgs: [principalCV(address)],
        network:network,
        stxAddress: address,
    };
  
    const response = await doContractCall(options);
  
  }



  async function handleClick() {

    
  const userData = userSession.loadUserData().profile.stxAddress.testnet;
  
  console.log(userData);

    console.log("btn click")

    const options = {
      contractAddress,
      contractName: 'pumpkin-piezzz',
      functionName: 'get-token-uri',
      functionArgs: [uintCV(1)],
      senderAddress: userData,
      network: network,
    };

    const response = await doContractCall(options);

    console.log(response);

    setResult(result.value);
  }

  return (
    <div>

      <button onClick={useHandleClaimHey}>Get Token URI</button>
      <label>
        Token ID:
        <input type="uint" value={tokenId} onChange={e => setTokenId(e.target.value)} />
      </label>
      <button onClick={handleClick}>Get Token URI</button>
      <p>{result}</p>
    </div>
  );
}

export default ClarityNFTs;
