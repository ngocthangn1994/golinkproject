import Badge from "../../../components/ui/Badge";
import Sizes from "../../../components/ui/sizes";
import customLink from "../../../assets/recent_link.png";
import { FaCheckCircle } from "react-icons/fa";

const LinkManagement = () => {
  const steps = [
    "Review saved keywords and destination",
    "Use the delete icon to remove a saved link",
  ];
  return (
    <>
      <div className="flex justify-center justify-between items-center gap-50 border-b border-slate-200 py-5">
        <div className="space-y-1">
          <Badge size="sm" style="primary">
            LINK MANAGEMENT
          </Badge>
          <div className="mt-3 w-md">
            <p className={Sizes.md}>Keep your saved links easy to find.</p>
            <p>
              See your shortcuts and their destination URLs togetherin Recent
              Links. Remove a shortcut when you no longer need it.
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

export default LinkManagement;
