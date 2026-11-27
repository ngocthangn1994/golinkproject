import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import { FcGoogle } from "react-icons/fc";
import addGolynk from "../../../assets/step1_add_golynk.png";
const AddGolynk = () => {
  return (
    <>
      <div className="grid grid-cols-[0.1fr_0.9fr] items-center">
        <p className="text-9xl px-5 py-10 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 text-center">
          1
        </p>

        <Card optional="grid grid-cols-[0.4fr_0.6fr] p-10 shadow-sm hover:shadow-lg">
          <div className="space-y-3">
            <Badge size="sm" style="primary">
              STEP 01
            </Badge>
            <p className="text-3xl font-bold mt-5">Add Golynk to Chrome</p>
            <p className="w-xs">
              Select Add to Chrome and complete the installation in Chrome.
            </p>
            <Button
              size="sm"
              style="primary"
              optional="flex items-center gap-1 bg-blue-500 hover:bg-blue-600"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-white">Add to Chrome</span>
            </Button>
          </div>
          <img className="w-100 object-cover h-auto" src={addGolynk} />
        </Card>
      </div>
    </>
  );
};

export default AddGolynk;
