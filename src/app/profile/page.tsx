"use client";
import React, { useState } from "react";
import Photo from "../components/profile/Photo";
import Biodata from "../components/profile/Biodata";

const Page = () => {
  const [run, setRun] = useState<boolean>(false);

  return (
    <div className="lg:flex lg:justify-around lg:items-start h-fit space-y-2">
      <Photo run={run} />
      <Biodata setRun={setRun} run={run} />
    </div>
  );
};

export default Page;
