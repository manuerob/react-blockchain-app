import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { userSession } from './ConnectWallet';
import { uintCV, principalCV } from '@stacks/transactions';
//import { StacksTestnet } from '@stacks/network';
import { StacksMocknet } from 'micro-stacks/network'
import { StacksTestnet } from 'micro-stacks/network'
import { callReadOnlyFunction } from 'micro-stacks/transactions'


const ADDRESS = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
const CONTRACT = 'color-vote'

const contractAddress = 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J';
const network = new StacksTestnet();




function ClarityNFTs() {
const { doContractCall } = useConnect();
  const [tokenId, setTokenId] = useState('');
  const [result, setResult] = useState('');

  async function useHandleClaimHey() {
    const address = userSession.loadUserData().profile.stxAddress.testnet;

    console.log("btn click2")
  
    const options = {
      contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        contractName: 'billboard',
        functionName: 'get-message',
        functionArgs: [],
        network: network,
        senderAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
    };
    const response = await callReadOnlyFunction(options);

    console.log(response);
  
  }



  async function handleClick() {

    
  const userData = userSession.loadUserData().profile.stxAddress.testnet;
  
  console.log(userData);

    console.log("btn click")

    const options = {
      contractAddress,
      contractName: 'pumpkin-piezzz',
      functionName: 'claim',
      functionArgs: [],
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
      <button onClick={handleClick}>Claim</button>
      <p>{result}</p>
    </div>
  );
}

export default ClarityNFTs;
