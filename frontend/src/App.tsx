import "./App.css";
import Features from "./pages/Features/Features";
import About from "./pages/About/About";
import Homepage from "./pages/HomePage/HomePage";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import FAQ from "./pages/FAQ/FAQ";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="howitworks" element={<HowItWorks />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
