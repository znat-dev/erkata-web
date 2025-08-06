import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Contact } from './components/sections/Contact';
import { Trainings } from './components/sections/Trainings';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { FindTutors } from './components/sections/FindTutors';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-8"
        } bg-black text-grey-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Trainings />
          <FindTutors />
          <Contact />
        </div>
    </>
    );
}

export default App
