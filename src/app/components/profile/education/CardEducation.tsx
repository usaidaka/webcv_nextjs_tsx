import Image from "next/image";
import React from "react";

type EducationData = {
  name: string;
  program: string;
  year: string;
  gpa: string;
  src: string;
};

const educations: EducationData[] = [
  {
    name: "IPB UNIVERSITY (BOGOR AGRICULTURAL UNIVERSITY)",
    program: "Technology and Management Aquaculture",
    year: "Aug 2017 - Jan 2022",
    gpa: "3.25 / 4.00",
    src: "/ipblogo.png",
  },
  {
    name: "PURWADHIKA DIGITAL TECHNOLOGY SCHOOL",
    program: "Fullstack Web Development",
    year: "Mar 2023 - Oct 2023",
    gpa: "8.20 / 10.00",
    src: "/purwadhikalogo.png",
  },
];

const CardEducation = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {educations.map((education, idx) => (
        <div
          key={idx}
          className="shadow-5xl border-2 border-blue-300 p-4 rounded-md w-96 grid grid-rows-6 space-y-4"
        >
          <div className="row-span-2 flex justify-center items-center">
            <Image
              src={education.src}
              alt={`${education.src} logo`}
              width={200}
              height={0}
            />
          </div>
          <div className="row-span-4 ">
            <div>
              <h1 className="font-bold">{education.name}</h1>
              <i className="text-xs">{education.program}</i>
            </div>
            <div className="flex justify-between text-xs font-semibold">
              <h3>GPA : {education.gpa}</h3>
              <h3>{education.year}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEducation;
