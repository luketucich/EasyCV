export default function GeneralInfo({ education, setEducation }) {
  const handleChange = (field) => (e) => {
    setEducation((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleAddEducation = () => {
    setEducation((prev) => [
      ...prev,
      { school: "", degree: "", major: "", date: "" },
    ]);
  };

  const handleRemoveEducation = () => {
    if (education.length === 1) return;
    setEducation((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex flex-col gap-3 bg-white shadow-md p-8 rounded-md h-64 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-track-slate-400">
      <h1 className="text-2xl font-bold">Education</h1>
      {education.map((edu) =>
        Object.keys(edu).map((field) => (
          <div className="flex flex-col gap-1 items-start" key={field}>
            <label className="font-bold text-xs">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              value={edu[field]}
              onChange={handleChange(field)}
              className="border border-black border-solid rounded-md p-1"
            />
          </div>
        ))
      )}
      <div className="flex justify-center gap-2">
        <button
          onClick={handleRemoveEducation}
          className="p-2 cursor-pointer border border-black rounded-md hover:bg-slate-100"
        >
          -
        </button>
        <button
          onClick={handleAddEducation}
          className="p-2 cursor-pointer border border-black rounded-md hover:bg-slate-100"
        >
          +
        </button>
      </div>
    </div>
  );
}
