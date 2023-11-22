import clsx from "clsx";
import Image from "next/image";
import React from "react";

type TechStack = {
  frontEnd: string[];
  backEnd: string[];
};

type Project = {
  title: string;
  src: string;
  link: string;
  language: string;
  deploy: boolean;
  description: string;
  techStack: TechStack[];
};

const projects: Project[] = [
  {
    title: "Furnifor Warehouse",
    src: "/warehouseProject.png",
    link: "https://jcwd240402.purwadhikabootcamp.com/",
    language: "Javascript",
    deploy: true,
    description:
      "The website I've developed is a warehouse platform specializing in furniture sales, equipped with an advanced stock management system. With efficient stock management features, users can easily oversee and transfer inventory to meet diverse warehouse requirements more effectively.",
    techStack: [
      {
        frontEnd: [
          "ReactJS",
          "TailwindCSS",
          "Axios",
          "Redux",
          "Responsive Web",
        ],
        backEnd: [
          "NodeJS",
          "ExpressJS",
          "ExpressJS-Express Validator",
          "MySQL",
          "Firebase",
          "OAuth",
          "Multer",
          "SMTP-Nodemailer",
          "Node-schedule",
          "ORM-Sequelize",
        ],
      },
    ],
  },
  {
    title: "TokoKita Mini E-Commerce",
    src: "/tokokitaProject.png",
    link: "https://github.com/usaidaka/shopping-webapp",
    language: "Javascript",
    deploy: false,
    description:
      "The mini e-commerce website that I've developed offers a compact yet comprehensive online shopping platform. With user-friendly features and a seamless interface, it provides a convenient and enjoyable experience for customers to explore and purchase a variety of products.",
    techStack: [
      {
        frontEnd: [
          "ReactJS",
          "TailwindCSS",
          "Axios",
          "Redux",
          "Responsive Web",
        ],
        backEnd: [
          "NodeJS",
          "ExpressJS",
          "ExpressJS-Express Validator",
          "MySQL",
          "Multer",
          "ORM-Sequelize",
        ],
      },
    ],
  },
  {
    title: "Attendance System",
    src: "/attendanceSystemProject.png",
    link: "https://github.com/usaidaka/attendance-system",
    language: "Javascript",
    deploy: false,
    description:
      "The attendance system website I've created introduces an innovative approach to workforce management. Its standout feature includes automated calculations for salary deductions based on employees' punctuality or tardiness, offering a streamlined solution for efficient payroll processing and attendance tracking.",
    techStack: [
      {
        frontEnd: [
          "ReactJS",
          "TailwindCSS",
          "Axios",
          "Redux",
          "Responsive Web",
        ],
        backEnd: [
          "NodeJS",
          "ExpressJS",
          "ExpressJS-Express Validator",
          "MySQL",
          "ORM-Sequelize",
        ],
      },
    ],
  },
  {
    title: "My Github Repository",
    src: "/githubProfile.png",
    link: "https://github.com/usaidaka",
    language: "Javascript, Typescript",
    deploy: false,
    description:
      "Explore more of my diverse portfolio by visiting my GitHub repository. Discover a showcase of my skills and projects, demonstrating a commitment to excellence and innovation. Your journey into my work awaits – dive into the possibilities!",
    techStack: [
      {
        frontEnd: [
          "ReactJS",
          "NextJS",
          "TailwindCSS",
          "Axios",
          "Redux",
          "HTML",
          "CSS",
          "Jest",
          "Responsive Web",
          "etc",
        ],
        backEnd: [
          "NodeJS",
          "ExpressJS",
          "ExpressJS-Express Validator",
          "MySQL",
          "ORM-Sequelize",
          "Postman API",
          "etc",
        ],
      },
    ],
  },
];

const CardProject = () => {
  return (
    <div className="lg:grid lg:mt-0 flex flex-col grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="col-span-1 relative transition-all duration-300 ease-in-out hover:scale-105 shadow-6xl p-4 rounded-md"
        >
          <h5
            className={clsx(
              "text-xs absolute  bg-green-200 w-fit px-3 py-0.5 rounded-md font-semibold text-green-800",
              { "bg-gray-300 text-gray-900": !project.deploy }
            )}
          >
            {project.deploy ? "Deployment" : "Repository"}
          </h5>
          <div>
            <a href={project.link} target="_blank">
              <Image
                src={project.src}
                alt={""}
                width={600}
                height={100}
                className="hover:cursor-pointer "
              />
            </a>
            <div className="flex gap-2 items-center">
              <h1 className="font-bold">{project.title}</h1>
              <h5 className="text-xs bg-blue-200 w-fit px-3 py-0.5 rounded-md font-semibold text-blue-600">
                {project.language}
              </h5>
            </div>
            <h4 className="text-xs text-slate-500 ">{project.description}</h4>
          </div>
          {project.techStack.map((tech, idx) => (
            <div key={idx} className="text-xs">
              <div className="flex flex-wrap">
                <span className="font-semibold">Front End : </span>
                {tech.frontEnd.map((fe, idx) => (
                  <p key={idx} className="ml-1">
                    {fe}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap">
                <span className="font-semibold">Back End :</span>
                {tech.backEnd.map((be, idx) => (
                  <p key={idx} className="ml-1">
                    {be}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardProject;
