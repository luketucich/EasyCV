export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (field) => (e) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3 bg-white shadow-md p-8 rounded-md">
      <h1 className="text-2xl font-bold">General Info</h1>
      {Object.keys(generalInfo).map((field) => (
        <div className="flex flex-col gap-1 items-star" key={field}>
          <label className="font-bold text-xs">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            value={generalInfo[field]}
            onChange={handleChange(field)}
            className="border border-black border-solid rounded-md p-1"
          />
        </div>
      ))}
    </div>
  );
}
