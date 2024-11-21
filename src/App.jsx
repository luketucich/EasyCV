import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Resume from "./Resume";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    first: "John",
    last: "Smith",
    email: "johnsmith@example.com",
    number: "555-555-5555",
    location: "Charlotte, NC",
    website: "github.com/johnsmith",
  });

  const [education, setEducation] = useState([
    {
      school: "University of North Carolina at Charlotte",
      location: "Charlotte, NC",
      degree: "B.S.",
      major: "Computer Science",
      date: "Aug 2022 - May 2026",
      gpa: "4.0 / 4.0",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <div className="flex gap-8 p-5">
      <div className="flex flex-col gap-4">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education education={education} setEducation={setEducation} />
      </div>
      <Resume generalInfo={generalInfo} education={education} />
    </div>
  );
}
