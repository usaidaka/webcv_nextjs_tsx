"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const Photo = ({ run }: { run: boolean }) => {
  const [isFormal, setIsFormal] = useState<boolean>(true);

  const handleFormal = () => {
    setIsFormal(!isFormal);
  };

  return (
    <div className="flex flex-col lg:w-96 w-full justify-center items-center space-y-2 ">
      <Image
        src={
          isFormal ? "/UsaidAlkamilFormal.jpg" : "/UsaidAlkamilNonFormal.jpg"
        }
        alt={"my picture"}
        width={100}
        height={100}
        className="rounded-full shadow-4xl lg:w-44 "
      />
      <button
        onClick={handleFormal}
        className={clsx(
          "bg-green-500 w-fit px-4 h-8 rounded-md text-xs lg:text-base rotate-6 hover:rotate-0 transition-all",
          {
            "bg-blue-500 text-white -rotate-6 hover:rotate-0 transition-all":
              isFormal,
          }
        )}
      >
        {isFormal ? "Formal Photo" : "Non Formal Photo"}
      </button>
      {run && (
        <div className="hidden lg:block bg-slate-200 w-80 p-4 rounded-md text-sm">
          <p className="text-justify">
            Hello, I am Usaid Alkamil Anshorulloh and people address me Aka. I
            was born in 2 January 1999.
          </p>
          <p className="text-justify">
            I have experience with the following tech skills:
          </p>
          <p>
            <span className="font-bold">language</span> : JavaScript,
            TypeScript.
          </p>
          <p>
            <span className="font-bold">frontEnd</span> : HTML, CSS, ReactJS,
            NextJS, TailwindCSS.
          </p>
          <p>
            <span className="font-bold">backEnd</span> : NodeJS, ExpressJS,
            SequelizeJS, MySQL.{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Photo;
