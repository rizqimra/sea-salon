import { useRef, useState, useEffect } from 'react';
import Navbar from "../components/Navbar";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false); 
  const homeRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current) {
        const scrollPosition = window.scrollY;
        const homepageHeight = homeRef.current.clientHeight;
        const homepageOffsetTop = homeRef.current.offsetTop;

        // Calculate the bottom of the homepage section
        const homepageBottom = homepageOffsetTop + homepageHeight;

        // Check if the scroll position is within the homepage section
        if (scrollPosition >= homepageOffsetTop && scrollPosition <= homepageBottom) {
          setIsScrolled(false); 
        } else {
          setIsScrolled(true); 
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={homeRef} className="relative w-full h-screen flex flex-col">
      <Navbar isScrolled={isScrolled}/>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-mobile md:bg-hero bg-cover bg-center -z-10"></div>
      <div className="flex items-center justify-center h-full w-full relative z-10">
        <h1 className="flex flex-col text-white font-semibold text-5xl md:text-8xl text-center gap-2">
          Beauty and Elegance{" "}
          <span className="inline-block bg-gradient-to-r from-[#000FAA] to-[#6E70FF] text-transparent bg-clip-text">
            Redefined
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
