import HeroSection from "../HowItWorks/components/Herosection";
import Header from "../../components/Header";
import Footer from "./components/Footer";
function HowItWorks() {
  return (
    <>
      <div className="space-y-10">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
export default HowItWorks;
