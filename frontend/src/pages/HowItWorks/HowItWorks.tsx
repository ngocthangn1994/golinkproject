import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./components/HeroSection";
import AddGolynk from "./components/AddGolynk";
import OpenExtension from "./components/OpenExtension";
import CreateShortCut from "./components/CreateShortCut";
import GoKeyWord from "./components/GoKeyWord";
function HowItWorks() {
  return (
    <>
      <div className="space-y-10">
        <Header />
        <div>
          <HeroSection />
          <div className="space-y-5">
            <AddGolynk />
            <OpenExtension />
            <CreateShortCut />
            <GoKeyWord />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HowItWorks;
