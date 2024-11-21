export default function Skills({ skills, setSkills }) {
  const handleChange = (section, field) => (e) => {
    setSkills((prev) => {
      return prev.map((sect) =>
        sect.id === section.id ? { ...sect, [field]: e.target.value } : sect
      );
    });
  };

  const handleAddSection = () => {
    setSkills((prev) => [
      ...prev,
      {
        section: "",
        skill: [""],
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemoveSection = () => {
    if (skills.length === 1) return;
    setSkills((prev) => prev.slice(0, -1));
  };

  return (
    <div className="text-gray-800 flex flex-col bg-white shadow-lg p-6 rounded-lg h-72 overflow-y-auto">
      <h1 className="text-3xl font-semibold mb-6">Skills</h1>

      {skills.map((section, index) => (
        <div key={section.id}>
          {index !== 0 && (
            <div className="mt-4 mb-4 flex justify-center">
              <hr className="border-gray-300 w-full" />
            </div>
          )}
          {Object.keys(section).map(
            (field) =>
              field !== "id" && (
                <div
                  className="flex flex-col items-start mb-4"
                  key={section.id + field}
                >
                  <label className="font-medium text-base mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <div className="flex w-full">
                    {field === "section" && (
                      <input
                        onChange={handleChange(section, field)}
                        value={section[field]}
                        className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                      />
                    )}
                    {field === "skill" && (
                      <div className="flex flex-col gap-2 w-full">
                        {section[field].map((skill, index) => (
                          <input
                            key={section.id + field + index}
                            onChange={handleChange(section, field)}
                            value={skill}
                            className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {field === "skill" && (
                    <div className="flex w-full gap-2 justify-center mt-3">
                      <button className="p-2 w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 text-gray-800">
                        -
                      </button>
                      <button className="p-2 w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 text-gray-800">
                        +
                      </button>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      ))}
      <div className="flex flex-col justify-center gap-3">
        <button
          onClick={handleRemoveSection}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Remove Section
        </button>
        <button
          onClick={handleAddSection}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Add Section
        </button>
      </div>
    </div>
  );
}
