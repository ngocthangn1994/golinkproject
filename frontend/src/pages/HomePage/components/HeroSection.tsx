import golinkHerosection from "../../../assets/golink_herosection.png";
import { FcFlashOn } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { IoIosSync } from "react-icons/io";

function HeroSection() {
  const list = [
    { icon: <FaCheckCircle />, message: "Free to get started" },
    { icon: <FaUnlockAlt />, message: "Private & Secure" },
    { icon: <IoIosSync />, message: "Sync across devices" },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-20 px-10 text-slate-600 text-xl">
        <div className="space-y-10">
          <div className="flex items-center bg-blue-50 rounded-xl py-2 w-sm justify-center">
            <FcFlashOn className="w-8 h-8" />
            <p className="text-blue-600 font-medium">
              Browser faster with Golink
            </p>
          </div>
          <div className="text-7xl font-bold space-y-1">
            <p>
              Stop typing URLs. <br />
              <span className="text-blue-600">Just type a word.</span>
            </p>
          </div>
          <div className="space-y-1">
            <p>Create simple shortcuts for the websites you use every day.</p>
            <p>Type a saved keyword in your browser address bar</p>
            <p>and Golink takes you there instantly</p>
          </div>
          <div className="grid grid-cols-2 gap-5 font-medium">
            <div className="bg-blue-500 text-white p-2 rounded-xl flex items-center gap-3 hover:bg-blue-600 cursor-pointer">
              <FcGoogle className="w-10 h-10 text-sky-300" />
              <p>Add to Chrome - It's Free</p>
            </div>
            <div className="bg-white border border-slate-200 p-2 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-lg">
              <MdOutlineSlowMotionVideo className="w-10 h-10 text-slate-900" />
              <p>See How It Works</p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {list.map((item) => (
              <div className="flex items-center gap-3">
                <span className="text-blue-600">{item.icon}</span>
                <span>{item.message}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className="w-160 h-auto object-cover" src={golinkHerosection} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
