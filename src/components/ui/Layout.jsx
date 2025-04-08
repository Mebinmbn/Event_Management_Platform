import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getSidebarOpen = (isOpen) => {
    setSidebarOpen(isOpen);
  };
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-[#3a1f66] to-black bg-300 animate-gradient-bg">
      <div className=" p-6">
        <Header getSidebarOpen={getSidebarOpen} />
        <div className=" flex gap-5 md:p-4 mt-6 justify-between ">
          <div className="fixed top-0 left-0 z-40 lg:static">
            <Sidebar isOpen={sidebarOpen} getSidebarOpen={getSidebarOpen} />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
