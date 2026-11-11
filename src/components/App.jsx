import { useEffect, useRef } from "react";
import "../styles/App.css";
import ponytailVideo from "../assets/ponytail-video.mp4";
import About from "./About";
import Contact from "./Contact";
import Collections from "./Collections";
import Footer from "./Footer";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const startVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.warn("Hero video autoplay failed:", error);
      }
    };

    const handleReady = () => {
      if (video.readyState >= 2) {
        startVideo();
      }
    };

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
    };
  }, []);

  return (
    <div className="home">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo" aria-label="The Ponytail Hub home">
          <img src="/icons.svg" alt="The Ponytail Hub logo" className="brand-logo" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collections">Collections</a>
          {/* <a href="#gallery">Gallery</a> */}
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={ponytailVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <div className="hero-content">
          <p className="hero-small-text">WELCOME TO</p>
          <h1>
            THE PONYTAIL HUB 
          </h1>
          <p className="hero-description">
            Elevate your look with beautiful, stylish and
            effortless ponytails made for every occasion.
          </p>

          <a href="#collections" className="hero-button" aria-label="Explore our collections">
            EXPLORE OUR COLLECTIONS
          </a>
        </div>

      </section>

      <About />
      <Collections />

      <div className="section-divider" aria-hidden="true"></div>

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
