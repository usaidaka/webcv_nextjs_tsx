import clsx from "clsx";
import React from "react";

type DataExperience = { role: string; date: string };

type Experience = {
  school: string;
  data: DataExperience[];
};

const experiences: Experience[] = [
  {
    school: "Student Executive Board Faculty Fisheries and Marine Science",
    data: [
      {
        role: "Staff Action and Strategy Studies",
        date: "Nov 2018 - Aug 2019",
      },
    ],
  },
  {
    school: "Aquaculture Student Association",
    data: [
      {
        role: "Staff Multimedia and Digital ",
        date: "Nov 2019 - Aug 2020",
      },
    ],
  },
  {
    school: "IPB UNIVERSITY",
    data: [
      {
        role: "Research Assistant at Kupang, NTT",
        date: "Dec 2021",
      },
      {
        role: "Research Assistant at Palembang, South Sumatra",
        date: "Nov 2021",
      },
      {
        role: "Research Assistant at Lake Toba, North Sumatra",
        date: "Nov 2021",
      },
      {
        role: "Research Assistant at Banyuwangi, East Java ",
        date: "Sep 2021",
      },
      {
        role: "Head Teaching Assistant of Physic and Chemical Water Quality",
        date: "Jul 2021 - Dec 2021",
      },
      {
        role: "Teaching Assistant of Aquascape and Fish",
        date: "Jan 2021 - Jun 2021",
      },
      {
        role: "Teaching Assistant of Genetic Fish",
        date: "Jan 2021 - Jun 2021",
      },
      {
        role: "Teaching Assistant of Physic and Chemical Water Quality",
        date: "Jan 2021 - Jun 2021",
      },
    ],
  },
];

const CardExperience = () => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {experiences.map((experience, index) => (
        <div key={index} className=" p-2 bg-blue-100 rounded-md  h-fit">
          <h2 className="font-bold text-sm">{experience.school}</h2>
          <table className="text-xs lg:w-[65vh]">
            {experience.data.map((item, idx) => (
              <>
                <tr
                  key={idx}
                  className={clsx("bg-blue-100", {
                    "bg-blue-200": idx % 2 == 0,
                  })}
                >
                  <td>{item.role}</td>
                  <td className="text-right font-semibold">{item.date}</td>
                </tr>
              </>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export default CardExperience;
