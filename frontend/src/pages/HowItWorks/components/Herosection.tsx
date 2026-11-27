import { WiStars } from "react-icons/wi";
import Badge from "../../../components/ui/Badge";
import { FaArrowDown } from "react-icons/fa";

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
          <p>HOW IT WORKS</p>
        </Badge>
        <p className="text-5xl font-bold text-slate-900 text-center">
          A few steps to <br />
          <span className="text-blue-600">faster browsing.</span>
        </p>
        <p>
          Install Golynk, create a shortcut, and reach your favorite websites
          with a words.
        </p>
        <Badge
          size="sm"
          optional="border-b border-blue-600 flex items-center gap-3 text-blue-600 font-bold"
        >
          <span>Follow the guide below</span>
          <FaArrowDown />
        </Badge>
      </div>
    </>
  );
}

export default HeroSection;
