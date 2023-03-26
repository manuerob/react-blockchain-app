import { BrowserRouter } from "react-router-dom";

import { About, Quotes, ClaritySection, SoliditySection, Hero, Navbar, StarsCanvas } from './components';

const App = () =>{
  return (
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
        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
