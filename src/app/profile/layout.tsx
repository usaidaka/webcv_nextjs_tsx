import Sidebar from "@/app/components/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen min-w-screen  flex justify-center items-center">
      <div className="w-4/5 h-[80vh] lg:grid shadow-4xl lg:grid-cols-12 rounded-xl">
        <div className="col-span-1 flex p-3 lg:p-6 lg:border-r-2 lg:border-b-0 border-b-2 lg:flex-col justify-evenly lg:space-x-0">
          <Sidebar />
        </div>
        <div className="col-span-11 p-4 lg:p-6 overflow-y-auto h-[70vh] lg:h-[80vh]">
          {children}
        </div>
      </div>
    </main>
  );
}
