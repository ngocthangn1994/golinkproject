import { CiSettings } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import { FaRegCircleQuestion } from "react-icons/fa6";

function Header() {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="text-slate-600 flex items-center gap-3">
          <ImAttachment className="w-10 h-10 text-blue-600 p-1" />
          <p className="text-2xl font-bold">GoLink</p>
        </div>
        <div className="flex items-center gap-3">
          <CiSettings className="w-8 h-8 p-1 shadow-sm rounded-full" />
          <FaRegCircleQuestion className="w-8 h-8 p-1 shadow-sm rounded-full" />
          <p className="p-2 rounded-full bg-sky-100 font-medium text-xl text-sky-600">
            T
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
