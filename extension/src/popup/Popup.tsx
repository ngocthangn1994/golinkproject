import Header from "./components/Header";
import CreateLink from "./components/CreateLink";
function Popup() {
  return (
    <main className="w-[450px] bg-slate-50 p-10 rounded-xl border border-slate-200 space-y-5 m-2 shadow-sm">
      <Header />
      <CreateLink />
    </main>
  );
}

export default Popup;
