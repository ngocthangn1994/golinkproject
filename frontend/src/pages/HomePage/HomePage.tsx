import Header from "../../components/layout/Header";
import HeroSection from "./components/HeroSection";
import HowGoLinkWorks from "./components/HowGoLinkWorks";
import PopularShortCut from "./components/PopularShortcut";
import WhyPeopleLoveGolink from "./components/WhyPeopleLoveGolink";
import BrowserFaster from "./components/BrowserFaster";
import Footer from "../../components/layout/Footer";
import PopupShowCase from "./components/PopupShowCase";
function Homepage() {
  return (
    <>
      <div className="mb-10 text-slate-600">
        <Header />
        <div className="space-y-10">
          <HeroSection />
          <HowGoLinkWorks />
          <PopupShowCase />
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
