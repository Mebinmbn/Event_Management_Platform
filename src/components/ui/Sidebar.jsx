import { useState } from "react";
import { ChevronDown, ChevronUp, LogOut, CircleX } from "lucide-react";

export default function Sidebar({ isOpen, getSidebarOpen }) {
  const [openEvents, setOpenEvents] = useState(true);
  const [openUsers, setOpenUsers] = useState(true);

  return (
    <aside
      className={`${
        isOpen ? "flex" : "hidden"
      } lg:flex w-64 h-full min-h-screen p-4 bg-[#1a102d] rounded-lg border-2 border-[#D175B6] shadow-[0_0_10px_rgba(255,0,255,0.3)] flex-col justify-between`}
    >
      <div className="lg:hidden ml-auto">
        <h1 onClick={() => getSidebarOpen(false)} className="cursor-pointer">
          <CircleX />
        </h1>
      </div>
      <div>
        <div className="mb-4">
          <button
            onClick={() => setOpenEvents(!openEvents)}
            className="w-full flex justify-between items-center px-4 py-2 text-pink-400 font-medium bg-[#2a1748] rounded-lg focus:border-2 focus:border-[#D175B6] transition"
          >
            Events
            {openEvents ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {openEvents && (
            <ul className="mt-2 ml-4 text-sm space-y-2">
              <li className="active:border-2 active:border-[#D175B6] px-3 py-1 rounded text-pink-300">
                New Requests
              </li>
              <li className="flex justify-between items-center px-3 py-1 rounded hover:bg-[#2a1748] transition">
                <span>Estimate</span>
                <span className="text-xs bg-pink-500 px-2 py-0.5 rounded-full text-white">
                  9
                </span>
              </li>
              <li className="px-3 py-1 rounded hover:bg-[#2a1748] transition">
                Events
              </li>
              <li className="px-3 py-1 rounded hover:bg-[#2a1748] transition">
                Partial Requests
              </li>
            </ul>
          )}
        </div>

        <div className="text-white space-y-4 text-sm font-medium">
          <div className="hover:text-pink-400 cursor-pointer">Positions</div>
          <div className="hover:text-pink-400 cursor-pointer">Contractors</div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setOpenUsers(!openUsers)}
            className="w-full flex justify-between items-center px-4 py-2 text-white font-medium hover:text-pink-400"
          >
            Users
            {openUsers ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {openUsers && (
            <ul className="mt-2 ml-4 text-sm space-y-2">
              <li className="px-3 py-1 rounded hover:bg-[#2a1748] transition">
                Admins
              </li>
              <li className="px-3 py-1 rounded hover:bg-[#2a1748] transition">
                Clients
              </li>
              <li className="px-3 py-1 rounded hover:bg-[#2a1748] transition">
                Coordinators
              </li>
            </ul>
          )}
        </div>

        <div className="mt-6 text-white text-sm font-medium hover:text-pink-400 cursor-pointer">
          Profile
        </div>
      </div>

      <div className="mt-10">
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-black text-white rounded hover:bg-pink-600 transition">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
