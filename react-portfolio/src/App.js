
import About from './components/About';
import Nav from './components/Nav';
import './App.css';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <ContactForm></ContactForm>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
