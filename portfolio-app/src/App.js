import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <hr/>
        <About></About>
        <ContactForm></ContactForm>
        <Project></Project> 
        <Resume></Resume> 
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
