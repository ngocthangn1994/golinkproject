import Card from "../../../components/ui/Card";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Badge from "../../../components/ui/Badge";
const QuickQuestion = () => {
  return (
    <>
      <div className="space-y-3 p-3">
        <p className="text-blue-600 font-bold">QUICK ANSWERS</p>
        <p className="font-bold text-4xl">
          A little help. <br /> A lot less clicking.
        </p>
        <p>
          Find your answer and get <br /> back to the websites you love.
        </p>
        <Card optional="p-5 bg-blue-100">
          <IoChatboxEllipsesOutline className="text-6xl p-2 bg-blue-200 rounded-full text-blue-600" />
          <p>Still have questions?</p>
          <p>We're happy to help.</p>
          <Badge
            size="sm"
            style="primary"
            optional="border flex items-center gap-3"
          >
            <MdOutlineEmail />
            Contact Support
          </Badge>
        </Card>
      </div>
    </>
  );
};

export default QuickQuestion;
