import golinkAbout from "../../../assets/golink_about.png";
import { MdAutoAwesome } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { IoBarChart } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

function HeroSection() {
  const list = [
    {
      icon: (
        <FaUsers className="w-20 h-20 p-3 bg-sky-50 rounded-full text-blue-600" />
      ),
      title: "500K+",
      name: "Happy Users",
      description: "Trusted by users worldwide",
    },
    {
      icon: (
        <ImAttachment className="w-20 h-20 p-3 bg-green-50 rounded-full text-green-600" />
      ),
      title: "15M+",
      name: "Links Shortened",
      description: "And counting every day",
    },
    {
      icon: (
        <IoBarChart className="w-20 h-20 p-3 bg-purple-50 rounded-full text-purple-600" />
      ),
      title: "30M+",
      name: "Clicks Tracked",
      description: "Data you can rely on",
    },
    {
      icon: (
        <FaShieldAlt className="w-20 h-20 p-3 bg-orange-50 rounded-full text-orange-600" />
      ),
      title: "99.9%",
      name: "Uptime",
      description: "Always here for you.",
    },
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-[1.3fr_0.9fr] px-10 text-slate-600 items-center">
          <div className="space-y-5">
            <p className="flex items-center  gap-3 text-blue-600 bg-sky-50 w-sm text-center font-bold p-2 rounded-xl">
              <MdAutoAwesome /> About GoLink
            </p>
            <div className="text-7xl font-bold">
              <p>
                Making links <p className="text-blue-600">smarter</p> and
                simpler.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                GoLink was created with a simple mission: to make link sharing
                faster, easier, and <br /> more powerful for everyone.
              </p>
              <p>
                Whether you're sharing with friends, growing your business, or
                building your brand,
                <br /> GoLink, gives you the tools you need to shorten,
                customized, and track your links with confidens
              </p>
            </div>
          </div>
          <div className="w-150 h-150">
            <img className="w-full h-full object-contain" src={golinkAbout} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 p-5 text-slate-600">
          {list.map((item) => (
            <div className="grid grid-cols-2 items-center border border-slate-200 p-5 rounded-xl">
              <span>{item.icon}</span>
              <div>
                <p className="text-3xl font-bold">{item.title}</p>
                <p className="font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
