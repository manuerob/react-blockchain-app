import {
    Clarinet,
    Tx,
    Chain,
    Account,
    types,
  } from "https://deno.land/x/clarinet@v1.5.2/index.ts";

  import {assertEquals} from "https://deno.land/std@0.90.0/testing/asserts.ts";


  Clarinet.test({
    name: "Ensure that setting and getting message works",
    async fn(chain: Chain, accounts: Map<string, Account>){
        let wallet_1 = accounts.get('wallet_1')!;

        let block = chain.mineBlock([
            Tx.contractCall('helloworld', 'get-message', [], wallet_1.address),
            Tx.contractCall('helloworld', 'set-message', [types.utf8("testing")], wallet_1.address),
            Tx.contractCall('helloworld', 'get-message', [], wallet_1.address),
        ])

        assertEquals(block.receipts.length, 3);
        assertEquals(block.height, 2);

        block.receipts[0].result.expectUtf8("Hello World!");

        block.receipts[2].result.expectUtf8("testing");

    }
  });