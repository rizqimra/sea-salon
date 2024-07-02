import { Element } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="relative flex flex-col gap-28 w-full">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;
