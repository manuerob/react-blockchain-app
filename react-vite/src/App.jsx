import { BrowserRouter } from "react-router-dom";
import { About, Quotes, ClaritySection, SoliditySection, Hero, Navbar, StarsCanvas } from './components';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import SolidityWallet from "./components/solidity/SolidityWallet";

const activeChainId = ChainId.Goerli;

const App = () =>{

  return (
    <ThirdwebProvider activeChain="goerli">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          </div>
          <About />
          <Quotes />
          <ClaritySection />
          <SoliditySection />
          {/* <StarsCanvas />  Remove comment to see stars!*/} 
        </div>
      </BrowserRouter>
    </ThirdwebProvider>
  )
}

export default App
