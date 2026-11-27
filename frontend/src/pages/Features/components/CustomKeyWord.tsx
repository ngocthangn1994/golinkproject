import Badge from "../../../components/ui/Badge";
import Sizes from "../../../components/ui/sizes";
import customLink from "../../../assets/golink_custom_keyword.png";
import { FaCheckCircle } from "react-icons/fa";

const CustomKeyword = () => {
  const steps = [
    "Choose a keyword that makes sense to you",
    "Connect it to the full website address",
  ];
  return (
    <>
      <div className="flex justify-center justify-between items-center gap-50 border-b border-slate-200 py-5">
        <div className="space-y-1">
          <Badge size="sm" style="primary">
            CUSTOM KEYWORDS
          </Badge>
          <div className="mt-3 w-md">
            <p className={Sizes.md}>Give every link a name you remember.</p>
            <p>
              Save a keyword alongside a destination URL, so your favorite
              websites are easier to reach.
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
          </div>
        </div>
        <img className="w-120 h-auto object-cover" src={customLink} />
      </div>
    </>
  );
};

export default CustomKeyword;
