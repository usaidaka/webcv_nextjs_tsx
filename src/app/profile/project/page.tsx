import CardProject from "@/app/components/profile/project/CardProject";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bebas lg:text-3xl text-xl font-bold text-blue-400 drop-shadow-2xl">
        Project
      </h1>
      <CardProject />
    </div>
  );
};

export default Page;
