import { FaAmazon } from "react-icons/fa";
import { SiSamsclub } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

function PopularShortCut() {
  const menu = [
    {
      icon: <FaAmazon className="text-5xl text-yellow-300" />,
      name: "amazon",
      description: "amazon.com",
      detail: "Type amazon -> Open Amazon",
    },
    {
      icon: <SiSamsclub className="text-5xl text-blue-600" />,
      name: "sam",
      description: "samclub.com",
      detail: "Type sam -> Open Sam's Club",
    },
    {
      icon: <FaGithub className="text-5xl" />,
      name: "github",
      description: "github.com",
      detail: "Type github -> Open GitHub",
    },
    {
      icon: <SiGmail className="text-5xl text-red-600" />,
      name: "mail",
      description: "mail.google.com",
      detail: "Type mail -> Open Gmail",
    },
    {
      icon: <FaYoutube className="text-5xl text-red-600" />,
      name: "yt",
      description: "youtube.com",
      detail: "Type yt -> Open Youtube",
    },
  ];
  return (
    <>
      <div className="text-center text-slate-600 space-y-1">
        <p className="text-3xl font-bold">Popular Shortcuts</p>
        <p className="mb-5">Your favorite websites, one word away.</p>
        <div className="flex justify-between items-center px-10">
          {menu.map((item) => (
            <div className="p-5 border border-slate-200 shadow-sm rounded-xl space-y-3 hover:shadow-lg">
              <div className="flex gap-3">
                <span>{item.icon}</span>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <p className="text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularShortCut;
