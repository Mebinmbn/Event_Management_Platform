import { Bell, Info } from "lucide-react";
import logo from "../../assets/image.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <img src={logo} alt="" className="h-10" />
      <div className="flex items-center gap-4">
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
