import { FaShieldAlt } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <div className="space-y-5 text-slate-600 p-10">
        <div className="flex justify-center items-center">
          <div className="flex items-center rounded-xl bg-sky-50 px-5 py-2 gap-3">
            <FaShieldAlt className="text-blue-600" />
            <p className="text-blue-600 font-medium">PRIVACY</p>
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="flex gap-3 justify-center font-bold text-5xl text-slate-900">
            <p>Privacy</p>
            <p className="text-blue-600"> Policy</p>
          </div>
          <p>A clear look at your information and your choices.</p>
          <p>April 2026</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
