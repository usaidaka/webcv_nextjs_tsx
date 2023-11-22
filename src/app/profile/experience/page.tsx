import CardExperience from "@/app/components/profile/experience/CardExperience";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bebas lg:text-3xl text-xl font-bold text-blue-400 drop-shadow-2xl">
        Experience
      </h1>
      <CardExperience />
    </div>
  );
};

export default Page;
