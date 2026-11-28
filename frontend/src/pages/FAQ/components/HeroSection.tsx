import { FaRegCircleQuestion } from "react-icons/fa6";

function HeroSection() {
  return (
    <>
      <div className="space-y-5 text-slate-600 p-10">
        <div className="flex justify-center items-center">
          <div className="flex items-center rounded-xl bg-sky-50 px-5 py-2 gap-3">
            <FaRegCircleQuestion className="text-blue-600" />
            <p className="text-blue-600 font-medium">HELP CENTER</p>
          </div>
        </div>
        <div className="text-center space-y-3">
          <div className="font-bold text-5xl text-slate-900">
            <p>Got questions?</p>
            <div className="flex gap-3 justify-center">
              <p>We've got</p>
              <p className="text-blue-600"> answers.</p>
            </div>
          </div>
          <p>Everything you need to know about your everyday shortcuts.</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
