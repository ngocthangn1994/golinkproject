import { FaAmazon } from "react-icons/fa";
import { SiSamsclub } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import Card from "../../../components/ui/Card";
function PopularShortCut() {
  const menu = [
    {
      icon: <FaAmazon className="text-5xl text-yellow-300" />,
      keyword: "amazon",
      url: "amazon.com",
      detail: "Type amazon -> Open Amazon",
    },
    {
      icon: <SiSamsclub className="text-5xl text-blue-600" />,
      keyword: "sam",
      url: "samclub.com",
      detail: "Type sam -> Open Sam's Club",
    },
    {
      icon: <FaGithub className="text-5xl" />,
      keyword: "github",
      url: "github.com",
      detail: "Type github -> Open GitHub",
    },
    {
      icon: <SiGmail className="text-5xl text-red-600" />,
      keyword: "mail",
      url: "mail.google.com",
      detail: "Type mail -> Open Gmail",
    },
    {
      icon: <FaYoutube className="text-5xl text-red-600" />,
      keyword: "yt",
      url: "youtube.com",
      detail: "Type yt -> Open Youtube",
    },
  ];
  return (
    <>
      <div className="text-center space-y-3">
        <p className="text-4xl font-bold text-slate-900">
          Your favorite sites. Your own shortcuts.
        </p>
        <p className="mb-10 text-2xl">Chose words that make sense to you.</p>
        <div className="grid grid-cols-5 gap-5 items-center">
          {menu.map((item) => (
            <Card optional="p-2 flex flex-col items-center">
              <span>{item.icon}</span>
              <p className="text-blue-600 font-bold text-xl">{item.keyword}</p>
              <p>{item.url}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularShortCut;
