import { WiStars } from "react-icons/wi";
import { GrAttachment } from "react-icons/gr";
import { GoBrowser } from "react-icons/go";
import { RiStackLine } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";

import Badge from "../../../components/ui/Badge";

const items = [
  {
    icon: <GrAttachment />,
    name: "Create shortcuts",
  },
  {
    icon: <GoBrowser />,
    name: "Keyword navigation",
  },
  {
    icon: <RiStackLine />,
    name: "Manage links",
  },
  {
    icon: <MdOutlineBarChart />,
    name: "Click counts",
  },
];
function HeroSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3">
        <Badge
          size="sm"
          style="primary"
          optional="flex items-center gap-3 text-blue-600 font-bold"
        >
          <span>
            <WiStars className="text-4xl" />
          </span>
          <p>FEATURES</p>
        </Badge>
        <p className="text-5xl font-bold text-slate-900 text-center">
          A closer look at <br />
          <span className="text-blue-600">your shortcuts</span>
        </p>
        <p>
          Explore the tools for creating, opening, and managing your keyword
          shortcuts.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center py-5 px-20">
        {items.map((item) => (
          <Badge
            size="sm"
            style="secondary"
            optional="flex items-center gap-3 flex justify-center shadow-sm"
          >
            <span className="text-xl">{item.icon}</span>
            <p className="font-semibold">{item.name}</p>
          </Badge>
        ))}
      </div>
    </>
  );
}

export default HeroSection;
