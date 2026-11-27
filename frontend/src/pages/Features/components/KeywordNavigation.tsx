import Badge from "../../../components/ui/Badge";
import Sizes from "../../../components/ui/sizes";
import keywordNavigation from "../../../assets/keyword-navigation.png";
import { FaCheckCircle } from "react-icons/fa";

const CustomKeyword = () => {
  const steps = [
    "Use familliar words instead of long URLs",
    "Go straight to a shortcut you already saved",
  ];
  return (
    <>
      <div className="flex justify-center gap-50 items-center border-b border-slate-200 py-5">
        <img className="w-120 h-auto object-cover" src={keywordNavigation} />

        <div className="space-y-1">
          <Badge size="sm" style="primary">
            KEYWORD NAVIGATION
          </Badge>
          <div className="mt-3 w-md">
            <p className={Sizes.md}>Open your saved destination directly.</p>
            <p>
              Use a saved keyword in Chrome's address bar to reach the website
              connected to it.
            </p>
          </div>
          <div>
            {steps.map((step) => (
              <Badge
                size="sm"
                style="none_outline"
                optional="flex items-center gap-2"
              >
                <FaCheckCircle className="text-blue-600" />
                {step}
              </Badge>
            ))}

            <Badge size="sm" style="none_outline">
              <span className="text-sm">
                <span className="text-blue-600 font-bold">Example:</span> uh -
                access.uh.edu/login.php
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomKeyword;
