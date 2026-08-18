import { api } from "../../api/linkApi";
import { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { SiCanvas } from "react-icons/si";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { AiFillOpenAI } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";

type Link = {
  _id: string;
  shortUrl: string;
  longUrl: string;
};

function CreateLink() {
  const [keyword, setKeyword] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    async function loadLinks() {
      try {
        const response = await api.getLinks();
        setLinks(response.data);
      } catch (error) {
        console.error("Failed to load links", error);
      }
    }
    loadLinks();
  }, []);
  const handleCreateLink = async (keyword: string, longUrl: string) => {
    try {
      const response = await api.createLink(keyword, longUrl);
      setKeyword("");
      setLongUrl("");
      const links = await api.getLinks();
      setLinks(links.data);

      return response;
    } catch (error) {
      console.error("Can't create the links");
    }
  };

  const handleRemove = async (id: string) => {
    await api.deleteLink(id);
    setLinks((prev) => prev.filter((link) => link._id != id));
  };

  const iconStyle = "w-10 h-10 p-2 rounded-full";
  const icon = {
    youtube: <FaYoutube className={`${iconStyle} bg-red-100 text-red-600`} />,
    amazon: <FaAmazon className={`${iconStyle} bg-sky-100 text-sky-600`} />,
    school: <IoSchool className={`${iconStyle} bg-red-100 text-red-600`} />,
    email: <SiGmail className={`${iconStyle} bg-red-100 text-red-600`} />,
    canvas: <SiCanvas className={`${iconStyle} bg-red-100 text-red-600`} />,
    teams: (
      <BiLogoMicrosoftTeams
        className={`${iconStyle} bg-sky-100 text-sky-600`}
      />
    ),
    openai: <AiFillOpenAI className={`${iconStyle} bg-slate-100`} />,
    google: <FaGoogle className={`${iconStyle} bg-red-100 text-red-600`} />,
    others: (
      <MdOutlineWebStories
        className={`${iconStyle} bg-orange-100 text-orange-600`}
      />
    ),
  };
  const getIcon = (url: string) => {
    const checkUrl = url.toLowerCase().trim();

    if (checkUrl.includes("youtube")) return icon.youtube;
    if (checkUrl.includes("amazon")) return icon.amazon;
    if (checkUrl.includes("school")) return icon.school;
    if (checkUrl.includes("gmail")) return icon.email;
    if (checkUrl.includes("canvas")) return icon.canvas;
    if (checkUrl.includes("teams")) return icon.teams;
    if (checkUrl.includes("chatgpt")) return icon.openai;
    if (checkUrl.includes("google")) return icon.google;
    else {
      return icon.others;
    }
  };
  return (
    <>
      <div className="space-y-5 text-slate-600">
        <div className="text-slate-600 flex justify-between items-center">
          <div>
            <h3 className="font-bold">Create New Link</h3>
            <p className="text-slate-500 text-sm">
              Add a keyword and long URL you want to visit.
            </p>
          </div>
        </div>
        <div>
          <label className="font-medium">Keyword</label>
          <div className="flex items-center gap-3 border p-2 rounded-2xl border-slate-200 overflow-hidden">
            <p className="bg-sky-100 px-2 py-1 rounded-xl">go.link/</p>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="outline-none"
              placeholder="sam"
            />
          </div>
        </div>
        <div>
          <label className="font-medium">Long URL</label>
          <div className="w-full flex gap-3 items-center border border-slate-200 px-1 py-1 rounded-xl overflow-hidden">
            <ImAttachment className="w-8 h-8 p-2 bg-sky-100 rounded-full" />
            <input
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="outline-none"
              placeholder="www.samclub.com"
            />
          </div>
        </div>
        <button
          type="button"
          className="flex items-center gap-3 bg-blue-600 font-medium text-white justify-center w-full rounded-xl py-1 hover:bg-blue-700"
          onClick={() => handleCreateLink(keyword, longUrl)}
        >
          <ImAttachment className="w-8 h-8 p-1" />
          Create Link
        </button>
      </div>
      <div className="text-slate-600">
        <div className="flex justify-between">
          <p className="font-medium">Recent Links</p>
          <p className="text-sm">View all</p>
        </div>
        <div className="space-y-3">
          {links &&
            links.map((item) => (
              <div className="flex items-center gap-2">
                <span>{getIcon(item.longUrl)}</span>
                <div
                  key={item.shortUrl}
                  className="border border-slate-200 p-2 rounded-xl w-full"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-blue-600 font-medium">
                          {item.shortUrl}
                        </p>
                        <p>{item.longUrl}</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold">0</p>
                      <p className="text-xs">Clicks</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleRemove(item._id)}>
                  <MdDeleteOutline className="w-8 h-8 p-1 bg-red-100 rounded-full text-red-400 hover:text-red-600" />
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default CreateLink;
