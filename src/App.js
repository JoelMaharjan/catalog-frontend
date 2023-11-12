import HeroSection from "./components/HeroSection";
import Campaign from "./pages/Campaign";
import AboutUs from "./pages/AboutUs";
import Banner from "./components/Banner";
import News from "./pages/News";
import { featureData } from "./utils/featureData";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <header>
        <HeroSection />
        <main>
          <Campaign />
          <AboutUs contentData={featureData} />
          <Banner />
          <News />
          <Resources />
          <ContactUs />
          <Footer />
          <Copyright />
        </main>
      </header>
    </div>
  );
}

export default App;
