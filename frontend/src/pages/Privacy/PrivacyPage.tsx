import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./components/HeroSection";
import Information from "../Privacy/components/Information";
import Overview from "./components/Overview";
import StorageAndRetention from "./components/StorageAndRetention";
import Sharing from "./components/Sharing";
import SideBar from "./components/SideBar";
const PrivacyPage = () => {
  return (
    <>
      <div className="space-y-5">
        <Header />
        <HeroSection />
        <div className="grid grid-cols-[0.2fr_0.8fr]">
          <div className="p-3">
            <SideBar />
          </div>
          <div className="p-3 space-y-10">
            <Overview />
            <Information />
            <StorageAndRetention />
            <Sharing />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
