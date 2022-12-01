
import About from './components/About';
import Nav from './components/Nav';
import './App.css';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
