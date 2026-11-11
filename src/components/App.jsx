import "../styles/App.css";
import ponytailVideo from "../assets/ponytail-video.mp4";
import About from "./About";
import Contact from "./Contact";
import Collections from "./Collections";
import Footer from "./Footer";
function App() {
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
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
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
            THE PONYTAIL HUB <br />
            <br />
            <span>BEAUTY REDEFINED</span>
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
