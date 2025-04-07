import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0d0c1c] via-[#1f103f] to-[#3a2c5c]">
      <div className=" p-6">
        <Header />
        <div className=" flex gap-5 p-4 mt-6 justify-between ">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
