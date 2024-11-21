export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (field) => (e) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="text-slate-900 flex flex-col gap-3 bg-slate-300 shadow-md p-8 rounded-md h-72 overflow-y-scroll scrollbar scrollbar-thumb-slate-500 scrollbar-track-transparent">
      <h1 className="text-2xl font-bold">General Info</h1>
      {Object.keys(generalInfo).map((field) => (
        <div className="flex flex-col gap-1 items-start" key={field}>
          <label className="font-bold text-xs">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            value={generalInfo[field]}
            onChange={handleChange(field)}
            className="bg-slate-200 border border-slate-800 border-solid rounded-md p-1 transition-transform duration-500 ease-in-out focus:outline-slate-600 focus:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
