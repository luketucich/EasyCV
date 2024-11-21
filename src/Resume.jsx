export default function Resume({ generalInfo, education }) {
  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center w-[8.5in] min-h-[11in] font-serif gap-0 flex-grow-0">
      <p className="text-3xl font-bold mt-[0.5in]">
        {generalInfo.first + " " + generalInfo.last}
      </p>
      <div className="flex items-center gap-2 w-[6.5in] ">
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
      <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
        <div>
          <p className="font-bold">Education</p>
          <hr className="border-black border-t-2 w-full"></hr>
        </div>
        {education.map((edu) =>
          Object.keys(edu).map((field) => (
            <>
              <div className="flex justify-between font-bold">
                <p>{field.school}</p>
                <p>{field.date}</p>
              </div>
              <div className="italic flex justify-between">
                <p>{field.degree + " in " + field.major}</p>
                <p>{field.location}</p>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}
