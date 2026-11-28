const Information = () => {
  const rows = [
    { info: "Saved keywords", feature: "Name and find your shortcuts" },
    { info: "Destination URLs", feature: "Open the websites you save" },
    {
      info: "Per-link click counts",
      feature: "Show a count beside each saved link",
    },
  ];

  return (
    <>
      <div className="space-y-3">
        <div className="flex gap-3 items-center text-4xl font-bold border-b-5 rounded-full w-md border-blue-600">
          <p className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200">
            02
          </p>
          <p>Information & use</p>
        </div>
        <p>The shortcut features work with the following information.</p>
        <div className="overflow-hidden rounded-xl border border-blue-300">
          <table className="w-full text-left">
            <thead className="bg-blue-100 text-slate-900">
              <tr>
                <th scope="col" className="p-3 font-bold">
                  Information
                </th>
                <th scope="col" className="p-3 font-bold">
                  Feature
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row) => (
                <tr key={row.info} className="hover:bg-slate-50">
                  <th
                    scope="row"
                    className="border-r border-slate-200 p-3 font-semibold text-slate-900"
                  >
                    {row.info}
                  </th>
                  <td className="p-3 text-slate-700">{row.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Information;
