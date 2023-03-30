import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { userSession } from './ConnectWallet';
import { uintCV } from '@stacks/transactions';
import { StacksTestnet } from 'micro-stacks/network'
import { callReadOnlyFunction } from 'micro-stacks/transactions'

const contractAddress = 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J';
const network = new StacksTestnet();


function ClarityReadOnly() {

  const [tokenId, setTokenId] = useState('');

  async function GetTokenUri() {
    const userAddress = userSession.loadUserData().profile.stxAddress.testnet;
  
    const options = {
      contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
        contractName: 'pumpkin-piezzz',
        functionName: 'get-token-uri',
        functionArgs: [uintCV(tokenId)],
        network: network,
        senderAddress: userAddress,
    };
    const response = await callReadOnlyFunction(options);
    const rawURI = response.value.value.data;

    console.log(rawURI);
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
      <label>
        Token ID:
        <input type="uint" value={tokenId} onChange={e => setTokenId(e.target.value)} />
      </label>
      <button onClick={GetTokenUri}>URI</button>
      <button onClick={GetLastTokenID}>LAST ID</button>
      <button onClick={GetOwner}>Owner</button>
      
    </div>
  );
}

export default ClarityReadOnly;
