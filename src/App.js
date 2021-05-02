import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      
      <header>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <Header></Header>
      <main>
        
        {!contactSelected ? (
          <>
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          
      
          </>
        ) : (
          <Contact></Contact>
          
          
        )}
        
        
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
