import { Bell, Info, Menu } from "lucide-react";
import logo from "../../assets/image.png";
import { useState } from "react";

export default function Header({ getSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    getSidebarOpen(isOpen);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex gap-2">
        <img src={logo} alt="" className="h-10" />
        <div className="lg:hidden mt-2">
          <button onClick={handleMenuClick}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 hidden md:flex">
        <Info size={18} />
        <Bell size={18} />

        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/30"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm">
              Hi, <strong className="text-[#00EEC5]">Muhammad Asad</strong>
            </p>
            <p className="text-xs text-gray-400">welcome back!</p>
          </div>
        </div>
      </div>
    </header>
  );
}
