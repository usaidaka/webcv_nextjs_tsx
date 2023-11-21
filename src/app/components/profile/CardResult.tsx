import React from "react";
import { IoMdDownload } from "react-icons/io";

const CardResult = () => {
  return (
    <>
      <p className="text-justify">
        Hello, I am Usaid Alkamil Anshorulloh and people address me Aka. I was
        born in 2 January 1999.
      </p>
      <p className="text-justify">
        I have experience with the following tech skills:
      </p>
      <p>
        <span className="font-bold">language</span> : JavaScript, TypeScript.
      </p>
      <p>
        <span className="font-bold">frontEnd</span> : HTML, CSS, ReactJS,
        NextJS, TailwindCSS.
      </p>
      <p>
        <span className="font-bold">backEnd</span> : NodeJS, ExpressJS,
        SequelizeJS, MySQL.{" "}
      </p>
      <a
        href="https://drive.google.com/file/d/1oYNTecWqB4zOM6-2nRy7MGSeNBzvQS3o/view?usp=sharing"
        target="_blank"
        className="text-xs flex justify-end text-blue-500 items-center gap-1"
      >
        <IoMdDownload /> Download resume
      </a>
    </>
  );
};

export default CardResult;
