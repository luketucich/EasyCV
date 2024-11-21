export default function Resume({ generalInfo }) {
  return (
    <div className="bg-white p-8 shadow-md p-12 rounded-md flex flex-col items-center justify-start w-[8.5in] h-[11in]">
      <h1 className="text-3xl font-bold mb-4">
        {generalInfo.first + " " + generalInfo.last}
      </h1>
      <div className="flex items-center gap-3">
        <p>{generalInfo.email}</p> ❖<p>{generalInfo.number}</p> ❖
        <p>{generalInfo.location}</p> ❖
        <a
          href={`https://www.${generalInfo.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {generalInfo.website}
        </a>
      </div>
    </div>
  );
}
