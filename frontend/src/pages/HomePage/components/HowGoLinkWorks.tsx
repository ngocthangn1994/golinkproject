import golinkShortcut from "../../../assets/golink_howitworks_shortcut.png";
import golinkCheck from "../../../assets/golink_check.png";
import golinkSearch from "../../../assets/golink_howitwork_search.png";

function HowGoLinkWorks() {
  const list = [
    {
      stt: "1",
      name: "Crete a shortcut",
      description: "Choose a keyword and connect it to any website",
      photo: golinkShortcut,
    },
    {
      stt: "2",
      name: "Type in your browser",
      description:
        "Type your keyword in the address bar just like a normal website",
      photo: golinkSearch,
    },
    {
      stt: "3",
      name: "Go instantly",
      description:
        "Press Enter and Golink takes you straight to your destination",
      photo: golinkCheck,
    },
  ];
  return (
    <>
      <div className="text-center text-slate-600">
        <p className="text-2xl font-bold">How GoLink works</p>
        <p>Three simple steps to faster browsing</p>
        <div className="grid grid-cols-3 gap-10 px-10 py-5">
          {list.map((item) => (
            <div className="flex shadow-sm border border-slate-200 p-5 rounded-xl hover:shadow-lg">
              <p className="text-blue-600 font-bold text-3xl">{item.stt}</p>
              <div>
                <p className="text-xl font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
              <div className="w-50 h-30">
                <img
                  className="w-full h-full object-contain"
                  src={item.photo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowGoLinkWorks;
