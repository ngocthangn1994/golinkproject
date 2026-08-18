import { ImAttachment } from "react-icons/im";
import { FaChrome } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-sky-50 rounded-xl p-5 rounded-xl text-slate-600 shadow-sm flex items-center justify-between p-10">
        <div>
          <ImAttachment className="w-15 h-15 text-blue-600 bg-blue-100 p-2 rounded-xl" />
        </div>
        <div>
          <p className="text-3xl font-bold">Ready to shorten your first link</p>
          <p>
            Join thousands of users who trust GoLink for their link management
          </p>
        </div>
        <div className="text-slate-600 text-center">
          <div className="bg-blue-600 text-white p-3 rounded-xl font-medium flex items-center gap-3">
            <FaChrome className="w-8 h-8 text-sky-300" />
            <button>Add GoLink to Chrome - It's Free</button>
          </div>
          <p>Setup in less than 30 seconds</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
