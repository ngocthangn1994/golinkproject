import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import HowGoLinkWorks from "./components/HowGoLinkWorks";
import PopularShortCut from "./components/PopularShortcut";
import WhyPeopleLoveGolink from "./components/WhyPeopleLoveGolink";
import BrowserFaster from "./components/BrowserFaster";
import Footer from "../../components/Footer";
function Homepage() {
  return (
    <>
      <div className="mb-10">
        <Header />
        <div className="space-y-10">
          <HeroSection />
          <HowGoLinkWorks />
          <PopularShortCut />
          <WhyPeopleLoveGolink />
          <BrowserFaster />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
