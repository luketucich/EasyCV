import { useState, useEffect } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";

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

  const [skills, setSkills] = useState([
    {
      section: "Languages",
      skill: ["JavaScript", "Python", "Java"],
      id: crypto.randomUUID(),
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Wordle",
      stack: "HTML, CSS, JavaScript",
      bullet: [
        "Created a clone of the popular game Wordle",
        "Implemented responsive design for mobile and desktop",
      ],
      completed: "Jan 2024",
      id: crypto.randomUUID(),
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex gap-8 p-5 ${isVisible ? "animate-fadeIn" : ""}`}>
      <div className="flex flex-col gap-4 w-[16rem]">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education education={education} setEducation={setEducation} />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects} />
      </div>
      <Resume generalInfo={generalInfo} education={education} skills={skills} />
    </div>
  );
}
