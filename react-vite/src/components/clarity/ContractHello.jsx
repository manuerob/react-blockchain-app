import { useConnect } from '@stacks/connect-react';
import { stringUtf8CV } from '@stacks/transactions';
import { useState, useEffect } from 'react';
import { styles } from '../../styles';

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
      
      <div className={styles.marginY}>
      <p className={styles.sectionSubText}>
        Contract messages
      </p>
        <p className={styles.sectionInfo}>
          Try sending a message on the contract
        </p>
        <form className="userInput"
          onSubmit={(e) => {
            e.preventDefault();
            setMessageOnBlockchain();
          }}
        >
          <input
            className={styles.inputMessage + styles.marginY}
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles.btn} type="submit">Set Message</button>
        </form>
        
        <p className="mt-4">
          Current message on the chain: <span className='text-[#FB9A42]'>{message}</span>
        </p>

      </div>
      
      <div>
        <p className={styles.sectionSubText}>
          Contract price information
        </p>
        <p>
          Current price for setting a message: {price} microSTX
        </p>
      </div>
    </div>
  );
}

export default ContractHello;