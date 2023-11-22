"use client";

import CardEducation from "@/app/components/profile/education/CardEducation";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bebas lg:text-3xl text-xl font-bold text-blue-400 drop-shadow-2xl">
        Education
      </h1>
      <CardEducation />
    </div>
  );
};

export default Page;
