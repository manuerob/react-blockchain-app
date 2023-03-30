import { BrowserRouter } from "react-router-dom";
import { About, Quotes, ClaritySection, SoliditySection, Hero, Navbar, StarsCanvas } from './components';
import * as MicroStacks from '@micro-stacks/react';


const App = () =>{
  return (
    <MicroStacks.ClientProvider
    network="testnet"
    >


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
    </MicroStacks.ClientProvider>
  )
}

export default App
