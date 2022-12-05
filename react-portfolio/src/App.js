import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';
import Projects from './components/Projects';
import ContactForm from './components/Contact';



function App() {
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Projects></Projects>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        }
      </main>
    </div>
  );
}

export default App;
