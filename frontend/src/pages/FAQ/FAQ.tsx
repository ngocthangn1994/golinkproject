import Header from "../../components/layout/Header";
import HeroSection from "./components/HeroSection";
import Questions from "./components/Questions";
import QuickQuestion from "./components/QuickQuestion";
import Footer from "../../components/layout/Footer";
function FAQ() {
  return (
    <>
      <div className="space-y-5 text-slate-600">
        <Header />
        <HeroSection />
        <div className="grid grid-cols-[0.2fr_0.8fr] p-5">
          <QuickQuestion />
          <Questions />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default FAQ;
