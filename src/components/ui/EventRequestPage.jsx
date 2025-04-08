import { useState } from "react";
import { MoveLeft, MoveRight, Eye, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockData = new Array(50).fill({
  eventName: "Filled Name",
  eventStart: "Jan 12, 2024",
  eventEnd: "Jan 14, 2024",
  clientName: "Muhammad Asad",
  contactInfo: "+1234 566 7890",
  venue: "Lorem Ipsum Dolor Sit Amet",
});

export default function EventRequestsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 14;

  const filteredData = mockData.filter((item) =>
    item.clientName.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleClick = () => {
    navigate("/event");
  };

  return (
    <div className="w-full  min-h-screen  text-white  font-sans ">
      <main className="flex-1 h-full md:py-6 border-2 border-[#D175B6] rounded-lg">
        <div className="flex justify-between items-center mb-6 px-6 flex-wrap">
          <h1 className="text-3xl font-semibold">Event Requests</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className=" rounded-lg bg-[#2b1f47] text-white border   flex">
              <div className="ps-2 pe-2 py-4">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search here"
                className="pe-4 py-2 rounded-lg bg-[#2b1f47] text-white focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="bg-gradient-to-br from-[#FF00FF] to-[#8F00FF] hover:bg-pink-700 text-white px-4 py-2 rounded text-lg">
              ＋
            </button>
          </div>
        </div>

        <div className=" border border-pink-500 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-[#D175B6] text-black">
              <tr>
                <th className="py-2 px-4"></th>
                <th className="py-2 px-4">Event Name</th>
                <th className="py-2 px-4">Event Start</th>
                <th className="py-2 px-4">Event End</th>
                <th className="py-2 px-4">Client Name</th>
                <th className="py-2 px-4">Contact Info</th>
                <th className="py-2 px-4">Venue</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((event, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-[#2c254d]" : "bg-[#1e1a38]"
                  } hover:bg-[#3a2a63] border-b border-pink-500`}
                >
                  <td className="py-2 px-4" onClick={handleClick}>
                    <Eye />
                  </td>
                  <td className="py-2 px-4">{event.eventName}</td>
                  <td className="py-2 px-4">{event.eventStart}</td>
                  <td className="py-2 px-4">{event.eventEnd}</td>
                  <td className="py-2 px-4">{event.clientName}</td>
                  <td className="py-2 px-4">{event.contactInfo}</td>
                  <td className="py-2 px-4">{event.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex bg-gray-950 p-5 justify-center mt-6 items-center space-x-2 text-#D175B6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <MoveLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "text-[#D175B6]"
                  : "hover:bg-pink-500/20"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            <MoveRight />
          </button>
        </div>
      </main>
    </div>
  );
}
