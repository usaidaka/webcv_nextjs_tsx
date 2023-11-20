import Sidebar from "@/app/components/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen min-w-screen border-2 border-red-200 flex justify-center items-center">
      <div className="border-2 border-black w-4/5 h-[80vh] lg:grid lg:grid-cols-12">
        <div className="col-span-1 border-2 border-yellow-200 space-x-6 flex p-3 lg:p-6 lg:flex-col lg:space-y-6 lg:space-x-0">
          <Sidebar />
        </div>
        <div className="col-span-11 border-green-200">{children}</div>
      </div>
    </main>
  );
}
