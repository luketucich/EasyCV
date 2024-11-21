export default function Education({ education, setEducation }) {
  const handleChange = (school, field) => (e) => {
    setEducation((prev) => {
      return prev.map((edu) =>
        edu.id === school.id ? { ...edu, [field]: e.target.value } : edu
      );
    });
  };

  const handleAddEducation = () => {
    setEducation((prev) => [
      ...prev,
      { school: "", degree: "", major: "", date: "", id: crypto.randomUUID() },
    ]);
  };

  const handleRemoveEducation = () => {
    if (education.length === 1) return;
    setEducation((prev) => prev.slice(0, -1));
  };

  return (
    <div className="text-slate-900 flex flex-col gap-3 bg-slate-300 shadow-md p-8 rounded-md h-72 overflow-y-scroll scrollbar scrollbar-thumb-slate-500 scrollbar-track-transparent">
      <h1 className="text-2xl font-bold">Education</h1>

      {education.map((edu, index) => (
        <div key={edu.id}>
          {index !== 0 && (
            <div className="mt-3 mb-3 flex justify-center">
              <hr className="border-slate-400 border-t-2 w-full" />
            </div>
          )}
          {Object.keys(edu).map(
            (field) =>
              field !== "id" && (
                <div key={edu.id + field}>
                  <div className="flex flex-col gap-1 items-start">
                    <label className="font-bold text-xs">
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    <input
                      value={edu[field]}
                      onChange={handleChange(edu, field)}
                      className="bg-slate-200 border border-slate-800 border-solid rounded-md p-1 transition-transform duration-500 ease-in-out focus:outline-slate-600 focus:scale-105"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      ))}

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
