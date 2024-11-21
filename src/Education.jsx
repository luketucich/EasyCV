export default function GeneralInfo({ education, setEducation }) {
  const handleChange = (field) => (e) => {
    setEducation((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3 bg-white shadow-md p-8 rounded-md">
      <h1 className="text-2xl font-bold">Education</h1>
      {Object.keys(education).map((field) => (
        <div className="flex flex-col gap-1 items-start" key={field}>
          <label className="font-bold text-xs">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            value={education[field]}
            onChange={handleChange(field)}
            className="border border-black border-solid rounded-md p-1"
          />
        </div>
      ))}
    </div>
  );
}
