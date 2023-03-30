import { BrowserRouter } from "react-router-dom";
import { About, Quotes, ClaritySection, SoliditySection, Hero, Navbar, StarsCanvas } from './components';
import * as MicroStacks from '@micro-stacks/react';

import { ThirdwebProvider } from "@thirdweb-dev/react";

const App = () =>{

  return (
    <MicroStacks.ClientProvider
    network="testnet"
    >
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
    </MicroStacks.ClientProvider>

  )
}

export default App
