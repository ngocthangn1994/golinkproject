import Header from "../../components/layout/Header";
import HeroSection from "./components/HeroSection";
import CustomKeyword from "./components/CustomKeyWord";
import KeywordNavigation from "./components/KeywordNavigation";
import LinkManagement from "./components/LinkManagement";
import ClickCount from "./components/ClickCount";
import Footer from "../../components/layout/Footer";
function Features() {
  return (
    <>
      <div>
        <Header />
        <div className="px-10 space-y-5">
          <HeroSection />
          <CustomKeyword />
          <KeywordNavigation />
          <LinkManagement />
          <ClickCount />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Features;
