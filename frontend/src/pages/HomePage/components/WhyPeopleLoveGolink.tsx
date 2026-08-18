import { RiFlashlightLine } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaInternetExplorer } from "react-icons/lia";

function WhyPeopleLoveGolink() {
  const list = [
    {
      icon: (
        <RiFlashlightLine className="text-yellow-600 w-12 h-12 p-1 border border-slate-200 rounded-full" />
      ),
      name: "Instant Access",
      description: "Go to websites with a single keyword. No more long URLs",
    },
    {
      icon: (
        <LuBrain className="text-blue-600 w-12 h-12 p-1 border border-slate-200 rounded-full" />
      ),
      name: "Easy to Remember",
      description: "Use simple words insted of complicated addresses",
    },
    {
      icon: (
        <CiSearch className="text-slate-600 w-12 h-12 p-1 border border-slate-200 rounded-full" />
      ),
      name: "Skip the Search",
      description: "No need to search on Google for sites you already know",
    },
    {
      icon: (
        <RiSecurePaymentLine className="text-sky-600 w-12 h-12 p-1 border border-slate-200 rounded-full" />
      ),
      name: "Smart & Secure",
      description: "Your shortcuts are private and stay in sync",
    },
    {
      icon: (
        <LiaInternetExplorer className="text-slate-900 w-12 h-12 p-1 border border-slate-200 rounded-full" />
      ),
      name: "Works Everywhere",
      description: "Use your shortcuts on any device, anytime.",
    },
  ];
  return (
    <>
      <div className="text-center px-5 text-slate-600">
        <p className="text-3xl font-bold mb-5">Why people love GoLink</p>
        <div className="grid grid-cols-5 gap-5">
          {list.map((item) => (
            <div className="flex border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-lg">
              <span>{item.icon}</span>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyPeopleLoveGolink;
