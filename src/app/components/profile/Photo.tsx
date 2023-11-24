"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import CardResult from "./CardResult";

const Photo = ({ run }: { run: boolean }) => {
  const [isFormal, setIsFormal] = useState<boolean>(true);

  const handleFormal = () => {
    setIsFormal(!isFormal);
  };

  return (
    <div className="flex flex-col lg:w-96 w-full justify-center items-center space-y-2 ">
      <Image
        src={"/UsaidAlkamilFormal.jpg"}
        alt={"my picture"}
        width={100}
        height={100}
        className="rounded-full shadow-4xl lg:w-36 object-cover transition-all"
      />
      <div className="flex lg:gap-6 lg:flex-row flex-col justify-center items-center ">
        <a
          href="https://instagram.com/usaidaka"
          target="_blank"
          className="flex items-center gap-1"
        >
          <Image
            src={"/igIcon.png"}
            alt={"instagram icon"}
            width={100}
            height={100}
            className="rounded-full shadow-4xl w-6 object-cover transition-all"
          />

          <span className="text-xs">@usaidaka</span>
        </a>
        <a
          href="https://wa.me/089652433206"
          target="_blank"
          className="flex  items-center gap-1"
        >
          <Image
            src={"/waIcon.png"}
            alt={"whatsapp icon"}
            width={100}
            height={100}
            className="rounded-full shadow-4xl w-6 object-cover transition-all"
          />
          <span className="text-xs">+6289652433206</span>
        </a>
      </div>
      {run && (
        <div className="hidden lg:block bg-slate-200 w-80 p-4 rounded-md text-sm">
          <CardResult />
        </div>
      )}
    </div>
  );
};

export default Photo;
