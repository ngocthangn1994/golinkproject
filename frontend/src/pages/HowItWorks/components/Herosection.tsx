import { MdAutoAwesome } from "react-icons/md";
import pastYourLink from "../../../assets/golink_howitwork_pastelink.png";
import getYourShortLink from "../../../assets/golink_getshortlink.png";
import getCustomize from "../../../assets/golink_customize.png";
import getShareTrack from "../../../assets/golink_share.png";
function HeroSection() {
  const list = [
    {
      image: pastYourLink,
      title: "Paste Your Link",
      description: "Copy and paste any long URL into GoLink's input field",
    },
    {
      image: getYourShortLink,
      title: "Get Your Short Link",
      description:
        "We'll instantly create a short, secure, and trackable link for you.",
    },
    {
      image: getCustomize,
      title: "Customize (Optional)",
      description:
        "Create a custom alias to match your brand or make it easy to remember.",
    },
    {
      image: getShareTrack,
      title: "Share & Track",
      description:
        "Share your link anywhere and track clicks, locations, and devices.",
    },
  ];
  return (
    <>
      <div className="space-y-5 px-10">
        <div className="text-center text-xl text-slate-600 flex flex-col items-center">
          <div className="flex text-blue-600 font-medium bg-sky-50 w-sm rounded-xl py-2 items-center gap-3 justify-center">
            <span>
              <MdAutoAwesome />
            </span>
            <p>Simple. Fast. Effective</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <p className="text-7xl font-bold">How </p>
            <p className="text-7xl font-bold text-blue-600">GoLink </p>
            <p className="text-7xl font-bold"> Works</p>
          </div>
          <p>
            Shorten, customize, and share your links in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 text-slate-600 text-center">
          {list.map((item) => (
            <div className="border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center p-5">
              <div className="w-110 h-80">
                <img
                  className="w-full h-full object-contain"
                  src={item.image}
                />
              </div>
              <div>
                <span className="font-bold text-2xl">{item.title}</span>
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
