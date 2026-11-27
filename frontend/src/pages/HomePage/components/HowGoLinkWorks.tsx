import golinkShortcut from "../../../assets/golink_howitworks_shortcut.png";
import golinkSearch from "../../../assets/golink_check.png";
import golinkCheck from "../../../assets/golink_howitwork_search.png";
import Card from "../../../components/ui/Card";
function HowGoLinkWorks() {
  const list = [
    {
      stt: "1",
      name: "Crete a shortcut",
      description: "Choose a keyword and add a destination URL.",
      photo: golinkShortcut,
    },
    {
      stt: "2",
      name: "Type in your browser",
      description: "Enter your saved keyword in Chrome's address bar.",
      photo: golinkSearch,
    },
    {
      stt: "3",
      name: "Go straight there",
      description: "Press Enter to open your destination.",
      photo: golinkCheck,
    },
  ];
  return (
    <>
      <div className="text-center text-slate-600">
        <p className="text-4xl font-bold text-slate-900">How GoLink works</p>
        <p className="text-2xl">Three simple steps to faster browsing</p>
        <div className="md:grid grid-cols-3 gap-10 px-10 py-5">
          {list.map((item) => (
            <Card optional="shadow">
              <span className="text-4xl px-5 font-bold py-2 rounded-full bg-blue-100 text-blue-900">
                {item.stt}
              </span>
              <div className="mt-5 space-y-2">
                <p className="font-bold text-3xl text-slate-900">{item.name}</p>
                <p className="text-2xl">{item.description}</p>
                <div className="flex justify-center">
                  <img className="w-120 h-auto object-cover" src={item.photo} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowGoLinkWorks;
