import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import goKeyword from "../../../assets/goKeyword.png";
const GoKeyWord = () => {
  return (
    <>
      <div className="grid grid-cols-[0.1fr_0.9fr] items-center">
        <p className="text-9xl px-5 py-10 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 text-center">
          4
        </p>

        <Card optional="grid grid-cols-[0.4fr_0.6fr] p-10 shadow-sm hover:shadow-lg">
          <div className="space-y-3">
            <Badge size="sm" style="primary">
              STEP 04
            </Badge>
            <p className="text-3xl font-bold mt-5">
              Type your keyword and press Enter
            </p>
            <p className="w-xs">
              Enter your saved keyword in Chrome's address bar to open its
              destination.
            </p>
            <p>Your saved keyword takes you straight to its website.</p>
          </div>
          <img className="w-100 object-cover h-auto" src={goKeyword} />
        </Card>
      </div>
    </>
  );
};

export default GoKeyWord;
