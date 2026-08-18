import { MdAutoAwesome } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { VscAttachCompact } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";
import golinkFeatures from "../../../assets/golink_features.png";
function HeroSection() {
  const list = [
    {
      icon: (
        <VscAttachCompact className="text-blue-600 bg-blue-50 w-15 h-15 p-2 rounded-full" />
      ),
      title: "Shorten Links",
      message: "Turn long, complex URLs into short links in seconds",
    },
    {
      icon: (
        <FaChartBar className="text-green-600 bg-green-50 w-15 h-15 p-2 rounded-full" />
      ),
      title: "Track & Analyze",
      message:
        "Get detailed insights about clicks, locations, devices, and more.",
    },
    {
      icon: (
        <FaPencilRuler className="text-purple-600 bg-purple-50 w-15 h-15 p-2 rounded-full" />
      ),
      title: "Custom Links",
      message:
        "Create branded, custom short links that build trust and boost clicks.",
    },
    {
      icon: (
        <IoShieldCheckmarkOutline className="text-orange-600 bg-orange-50 w-15 h-15 p-2 rounded-full" />
      ),
      title: "Secure & Reliable",
      message:
        "GoLink ensures your links are safe, secure, and always available.",
    },
  ];
  return (
    <>
      <div className="space-y-5 text-slate-600">
        <div className="flex justify-center">
          <div className="flex items-center justify-center text-blue-600 gap-3 font-medium bg-sky-50 p-3 rounded-xl">
            <MdAutoAwesome />
            <p>All the features you need</p>
          </div>
        </div>
        <div className="text-center text-4xl">
          <p className="font-bold">Powerful features to</p>
          <p className="font-bold text-blue-600">simplify your links</p>
          <p className="text-sm">
            GoLink gives you everything you need to shorten, manage, and track
            your links effectively.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 text-slate-600">
          {list.map((item) => (
            <div className="border border-slate-200 p-5 rounded-xl">
              <span>{item.icon}</span>
              <div>
                <p className="font-bold">{item.title}</p>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 border border-slate-200 p-10 gap-3">
          <div>
            <p className="text-blue-600 bg-sky-50 text-center font-medium p-2">
              IN-DEPTH ANALYTICS
            </p>
            <p className="text-2xl font-bold">Know your audience.</p>
            <p>
              Go beyond just clicks. Understand your audience with detailed
              analytics and make data-driven decisions.
            </p>
            <div className="flex items-center gap-3">
              <CiCircleCheck className="text-blue-600 w-8 h-8" />
              <p>Real-time click tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <CiCircleCheck className="text-blue-600 w-8 h-8" />
              <p>Top countries & referrers</p>
            </div>
            <div className="flex items-center gap-3">
              <CiCircleCheck className="text-blue-600 w-8 h-8" />
              <p>Device and browser insights</p>
            </div>
          </div>
          <div>
            <img src={golinkFeatures} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
