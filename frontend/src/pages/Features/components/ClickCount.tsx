import Badge from "../../../components/ui/Badge";
import Sizes from "../../../components/ui/sizes";
import keywordNavigation from "../../../assets/click_count.png";
import { FaCheckCircle } from "react-icons/fa";

const ClickCount = () => {
  const steps = [
    "A separate count beside each saved link",
    "Visible alongside its keyword and URL",
  ];
  return (
    <>
      <div className="flex justify-center gap-50 items-center border-b border-slate-200 py-5">
        <img className="w-120 h-auto object-cover" src={keywordNavigation} />

        <div className="space-y-1">
          <Badge size="sm" style="primary">
            CLICK COUNTS
          </Badge>
          <div className="mt-3 w-md">
            <p className={Sizes.md}>See a simple count for each link.</p>
            <p>
              Check the click count beside a saved shortcut, right inside the
              extension.
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

            <Badge
              size="sm"
              style="none_outline"
              optional="bg-violet-100 rounded-xl text-blue-900"
            >
              <span className="text-sm font-bold">
                Simple link counts, right where you manage your shortcuts.
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickCount;
