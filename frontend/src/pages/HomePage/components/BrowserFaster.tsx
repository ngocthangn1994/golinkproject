import { FcGoogle } from "react-icons/fc";

function BrowserFaster() {
  return (
    <>
      <div className="border border-slate-200 bg-sky-50 grid grid-cols-2 p-10 text-center items-center text-slate-600">
        <div>
          <p className="text-2xl font-bold">Ready to browse faster?</p>
          <p>Join thousands of users who save time with Golink</p>
        </div>
        <div>
          <div className="flex items-center gap-3 text-xl bg-blue-500 w-sm p-3 rounded-xl hover:bg-blue-600 cursor-pointer">
            <FcGoogle className="text-sky-300 w-15 h-15" />
            <button className="text-white font-medium">
              Add to Chrome - It's free
            </button>
          </div>
        </div>
        <p className="text-center">Setup in less than 30 seconds</p>
      </div>
    </>
  );
}

export default BrowserFaster;
