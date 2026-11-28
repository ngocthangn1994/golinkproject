import Card from "../../../components/ui/Card";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

import Badge from "../../../components/ui/Badge";
const SideBar = () => {
  const policies = [
    "Overview",
    "Information & use",
    "Storage & retention",
    "Sharing & providers",
    "Your choices",
    "Updates & contact",
  ];
  return (
    <>
      <div className="space-y-3">
        <Card optional="p-3">
          <p className="font-bold text-blue-600 mb-5">ON THIS PAGE</p>
          {policies.map((index, policy) => (
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl p-1 bg-slate-100 rounded-full text-blue-600">
                {policy + 1}
              </p>
              <p className="text-xl font-semibold">{index}</p>
            </div>
          ))}
        </Card>
        <Card optional="bg-blue-100 rounded-xl flex flex-col items-center p-3">
          <MdOutlinePolicy className="text-5xl p-2 bg-blue-300 text-blue-900 rounded-full" />
          <p className="text-2xl font-bold text-center">
            Have a privacy question?
          </p>
          <p>Get in touch with Golynk.</p>
          <Badge
            size="sm"
            style="primary"
            optional="flex items-center gap-3 border"
          >
            <MdOutlineMarkEmailUnread />
            <p>Contact Us</p>
          </Badge>
        </Card>
      </div>
    </>
  );
};
export default SideBar;
