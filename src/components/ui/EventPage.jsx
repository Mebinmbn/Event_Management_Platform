import { useState } from "react";
import { MoveLeft, MoveRight, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EventPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Assign Coordinator/Coordinator");
  const tabs = [
    "Event Details",
    "Assign Coordinator/Coordinator",
    "Session Management",
    "Generate SOW",
  ];

  const positions = Array(7).fill({
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  });

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen  text-white p-2 md:p-6 rounded-xl border border-pink-500 shadow-lg">
      <div className="flex gap-3">
        <div className="py-2" onClick={handleClick}>
          <MoveLeft />
        </div>
        <h1 className="text-3xl font-bold mb-6">
          Event Name{" "}
          <span className="text-gray-400 text-lg font-thin">
            (Venue Details)
          </span>
        </h1>
      </div>

      <div className="flex border border-pink-400 rounded  mb-6 w-fit overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 lg:text-sm text-xs font-medium transition-colors duration-300 border-r border-pink-400 last:border-none ${
              activeTab === tab
                ? "bg-pink-400 text-black"
                : "bg-[#0f0c29] hover:bg-pink-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-6">
        <div>
          <h2 className="font-semibold mb-2">Assign Coordinator</h2>
          <input
            placeholder="Search Coordinator"
            className="w-full bg-transparent border border-pink-400 px-4 py-2 rounded mb-2 placeholder:text-white"
          />
          <button className="text-pink-400 text-sm hover:underline">
            Add New Coordinator
          </button>
        </div>

        <div>
          <h2 className="font-semibold mb-2">
            Event Name <span className="text-gray-400">(Venue Here)</span>
          </h2>
          <div className="flex gap-4 mb-2">
            <input
              placeholder="Start: 12-12-2023"
              className="w-full bg-transparent border border-pink-400 px-4 py-2 rounded placeholder:text-white"
            />
            <input
              placeholder="Ends: 15-12-2023"
              className="w-full bg-transparent border border-pink-400 px-4 py-2 rounded placeholder:text-white"
            />
          </div>
          <input
            placeholder="Venue Address: Some Location 12, Name Here, City, State."
            className="w-full bg-transparent border border-pink-400 px-4 py-2 rounded placeholder:text-white"
          />
        </div>
      </div>

      <h2 className="font-semibold mb-4">Assign Contractor</h2>
      <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="space-y-3 rounded-lg border border-pink-400 bg-black p-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className={`${
                num === 1
                  ? "bg-pink-400 text-black"
                  : "bg-black text-white hover:bg-pink-800"
              } p-4 rounded-lg border border-pink-400 cursor-pointer`}
            >
              <div className="flex gap-3">
                <p className="font-bold">Meeting Room {num}</p>
                <div className="flex gap-1">
                  <div className="py-2">
                    <Sparkle size={10} />
                  </div>
                  <p className="text-xs mt-1">12 Positions</p>
                </div>
              </div>

              <p className="text-sm text-gray-300">
                Start from 12 Jan, 2023 – Ends at 15 Jan, 2023
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 col-span-5">
          <h1 className="mb-4">Positions</h1>
          <div className="border bg-black border-pink-400 rounded-xl py-4">
            <div className="grid grid-cols-5 font-semibold border-b border-pink-400 p-2 mb-2">
              <div>Position</div>
              <div>Time</div>
              <div>Info</div>
              <div>Quantity</div>
              <div></div>
            </div>
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 items-center text-sm p-2 border-b border-pink-300 last:border-0"
              >
                <div>{pos.position}</div>
                <div>{pos.time}</div>
                <div>{pos.info}</div>
                <div>{pos.quantity}</div>
                <select className="bg-black border border-pink-400 px-2 py-1 rounded  ">
                  <option>Select Contractor</option>
                </select>
              </div>
            ))}

            <div className="flex justify-center mt-4">
              <button className="px-2">
                <MoveLeft />
              </button>

              <span className="mx-2 w-2 h-2 rounded-full bg-pink-500 mt-2"></span>

              <button className="px-2">
                <MoveRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#D85AD8] text-white px-8 py-4 rounded-xl  shadow-lg hover:bg-pink-600 transition">
          Save Edits
        </button>
      </div>
    </div>
  );
}
