import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import createShortCut from "../../../assets/step3_createShortCut.png";
const CreateShortCut = () => {
  return (
    <>
      <div className="grid grid-cols-[0.1fr_0.9fr] items-center">
        <p className="text-9xl px-5 py-10 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 text-center">
          3
        </p>

        <Card optional="grid grid-cols-[0.4fr_0.6fr] p-10 shadow-sm hover:shadow-lg">
          <div className="space-y-3">
            <Badge size="sm" style="primary">
              STEP 03
            </Badge>
            <p className="text-3xl font-bold mt-5">
              Create your first shortcut
            </p>
            <p className="w-xs">
              Choose a keyword, paste the destination URL, then select Create
              Link
            </p>
            <Badge size="sm" style="primary" optional="flex items-center gap-1">
              <span>amazon - https://www.amazon.com/</span>
            </Badge>
          </div>
          <img className="w-100 object-cover h-auto" src={createShortCut} />
        </Card>
      </div>
    </>
  );
};

export default CreateShortCut;
