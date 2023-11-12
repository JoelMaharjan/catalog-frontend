import Navbar from "./Navbar";
import { ArrowForward } from "@mui/icons-material";

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-contents">
        <div className="hero-content">
          <p className="hero-heading">Beautiful analytics to grow smarter</p>
          <p className="hero-badge">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <button className="hero-btn">
          Why Catalog? <ArrowForward />{" "}
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
