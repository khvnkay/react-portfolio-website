import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Experience } from './components/experience/Experience';
import { Services } from './components/services/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Testimonails } from './components/testimonails/Testimonails';
import { About } from './components/about/About';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonails/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
