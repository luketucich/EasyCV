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
    location: "New York, NY",
    website: "github.com/johnsmith",
  });

  const [education, setEducation] = useState([
    {
      school: "University of New York",
      degree: "Bachelor's",
      major: "Computer Science",
      date: "Aug 2022 - May 2026",
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
