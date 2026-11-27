import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import { MdOutlinePushPin } from "react-icons/md";
import openExtension from "../../../assets/step2_openExtension.png";
const OpenExtension = () => {
  return (
    <>
      <div className="grid grid-cols-[0.1fr_0.9fr] items-center">
        <p className="text-9xl px-5 py-10 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 text-center">
          2
        </p>

        <Card optional="grid grid-cols-[0.4fr_0.6fr] p-10 shadow-sm hover:shadow-lg">
          <div className="space-y-3">
            <Badge size="sm" style="primary">
              STEP 02
            </Badge>
            <p className="text-3xl font-bold mt-5">Open the extension</p>
            <p className="w-xs">
              Open Chrome's extensions menu and select Golynk.
            </p>
            <Badge size="sm" style="primary" optional="flex items-center gap-1">
              <MdOutlinePushPin className="text-4xl p-1 bg-blue-300 rounded-full" />
              <span>Pink Golynk to keep it within easy reach</span>
            </Badge>
          </div>
          <img className="w-120 object-cover h-auto" src={openExtension} />
        </Card>
      </div>
    </>
  );
};

export default OpenExtension;
