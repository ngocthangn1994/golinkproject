import popUpShowCase from "../../../assets/popup_showcase.png";
import { FaCheckCircle } from "react-icons/fa";

const PopupShowCase = () => {
  const steps = [
    "Create custom keyword shortcuts",
    "Find recent links and click counts",
    "Delete links you no longer need",
  ];
  return (
    <>
      <div className="bg-blue-100 p-5 flex justify-center items-center gap-50">
        <div>
          <img className="w-150 object-cover h-auto" src={popUpShowCase} />
        </div>
        <div className="w-lg space-y-10 ">
          <p className="text-6xl font-bold text-slate-900">
            Your shortcuts, <br />
            all in one popup.
          </p>
          <p className="text-2xl">
            Create a shortcut, find a saved link,
            <br /> and keep your everyday browsing <br /> organized.
          </p>

          <div className="space-y-10">
            {steps.map((step) => (
              <div className="flex items-center gap-3 text-2xl">
                <span>
                  <FaCheckCircle className="text-blue-600" />
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupShowCase;
