import { IoDocumentTextOutline } from "react-icons/io5";

const StorageAndRetention = () => {
  return (
    <>
      <div className="space-y-3">
        <div className="flex gap-3 items-center text-4xl font-bold border-b-5 rounded-full w-md border-blue-600">
          <p className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200">
            03
          </p>
          <p>Storage & retention</p>
        </div>
        <div className="flex items-center gap-3">
          <IoDocumentTextOutline className="text-8xl text-blue-600 p-2 bg-blue-100 rounded-4xl border-r-20" />
          <div className="p-5 bg-blue-50 rounded-xl">
            <p className="text-2xl text-blue-600 font-bold">Draft details</p>
            <p>
              Storage locations, retention periods, security measures, and
              deletion timelines, to be confirmed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageAndRetention;
