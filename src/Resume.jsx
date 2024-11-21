export default function Resume({ generalInfo }) {
  return (
    <div className="bg-white p-8 shadow-md p-12 rounded-md flex flex-col items-center w-[8.5in] min-h-[11in] font-serif">
      <p className="text-3xl font-bold mb-4">
        {generalInfo.first + " " + generalInfo.last}
      </p>
      <div className="flex items-center gap-2 w-[6.5in]">
        <p className="w-max text-nowrap">{generalInfo.email}</p>
        <p>&#9670;</p>
        <p className="w-max text-nowrap">{generalInfo.number}</p>
        <p>&#9670;</p>
        <p className="w-max text-nowrap">{generalInfo.location}</p>
        <p>&#9670;</p>
        <a
          href={`https://www.${generalInfo.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-max text-nowrap"
        >
          {generalInfo.website}
        </a>
      </div>
      <div className="flex flex-col gap-2 w-[7.5in] mt-6">
        <div>
          <p>Education</p>
          <hr className="border-black border-t-2 w-full"></hr>
        </div>
      </div>
    </div>
  );
}
