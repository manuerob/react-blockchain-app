import { useConnect } from '@stacks/connect-react';
import { stringUtf8CV } from '@stacks/transactions';
import { useState, useEffect } from 'react';

function ContractHello() {
  const { doContractCall } = useConnect();
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState(0);

  async function setMessageOnBlockchain() {
    const options = {
      contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
      contractName: 'helloworld',
      functionName: 'set-message',
      functionArgs: [stringUtf8CV(message)],
    };

    const response = await doContractCall(options);

    console.log(response);
  }

  useEffect(() => {
    async function getPriceFromBlockchain() {
      const options = {
        contractAddress: 'ST3GYSEKYFE0SNZV0TNS30BM8PQ39QVN3SRG9PG4J',
        contractName: 'helloworld',
        functionName: 'get-price',
        readOnlyFunctionArgs: {},
      };

      const response = await doContractCall(options);

      setPrice(response);
    }

    getPriceFromBlockchain();
  }, [doContractCall]);

  return (
    <div>
      <p>
        Contract messages
      </p>
      <form className="userInput"
        onSubmit={(e) => {
          e.preventDefault();
          setMessageOnBlockchain();
        }}
      >
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="Contract" type="submit">Set Message</button>
      </form>
      
      <p>
        Current message on the chain: {message}
      </p>
      <p>
        Current price for setting a message: {price} microSTX
      </p>
    </div>
  );
}

export default ContractHello;