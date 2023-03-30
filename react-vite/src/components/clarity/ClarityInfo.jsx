import { comment } from 'postcss';
import React from 'react';
import { styles } from '../../styles';

const ClarityInfo = () => {
//   return (
//       <div className='flex-col space-y-5'>
//         <p className={styles.sectionInfo}>
//             Notes:
//             A trait that follows this specification is available on mainnet as SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait

//             mainnet: SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9
//             testnet: ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT
//         </p>
//       </div>
//   );


  return(

    <div className='flex-col space-y-5'>
        <p className={styles.sectionInfo}>First the trait has to be defined:</p>
        <p className={styles.sectionInfo}>
             Notes:
             A trait that follows this specification is available on mainnet as SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait

             <br/>
             <br/>mainnet: SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9
             <br/>testnet: ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT
        </p>

        <p className={styles.sectionInfo}>From that trait, the rest of the contract implementation can be done:</p>
        
        <pre>
            <code>(define-non-fungible-token amazing-aardvarks uint)</code><br/><br/>
            <code>(define-data-var last-token-id uint u0)</code><br/><br/>
            <code>(define-constant contract-owner tx-sender)</code><br/>
            <code>(define-constant err-owner-only (err u100))</code><br/>
            <code>(define-constant err-not-token-owner (err u101))</code><br/><br/>
            <code>(define-read-only (get-last-token-id)</code><br/>
            <code>(ok (var-get last-token-id))</code><br/>
            <code>)</code><br/><br/>
            <code>(define-read-only (get-token-uri (token-id uint))</code><br/>
            <code>(ok none))</code><br/><br/>
            <code>(define-read-only (get-owner (token-id uint))</code><br/>
            <code>(ok (nft-get-owner? amazing-aardvarks token-id)))</code><br/><br/>
            <code>(define-public (transfer (token-id uint) (sender principal) (recipient principal))</code><br/>
            <code>(begin</code><br/>
            <code>(asserts! (is-eq tx-sender sender) err-not-token-owner)</code><br/>
            <code>(nft-transfer? amazing-aardvarks token-id sender recipient)</code><br/>
            <code>))</code><br/><br/>
            <code>(define-public (mint (recipient principal))</code><br/>
            <code>(let</code><br/>
            <code>((token-id (+ (var-get last-token-id) u1)))</code><br/>
            <code>(asserts! (is-eq tx-sender contract-owner) err-owner-only)</code><br/>
            <code>(try! (nft-mint? amazing-aardvarks token-id recipient))</code><br/>
            <code>(var-set last-token-id token-id)</code><br/>
            <code>(ok token-id)</code><br/>
            <code>))</code><br/>


            
        </pre>
   </div>

    

    );
};

export default ClarityInfo;


// .\!whitespace-pre {
//     white-space: pre!important;
// }
