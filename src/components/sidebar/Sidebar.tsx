import React, { useState } from "react";
import {
  FaMicrophone,
  FaWaveSquare,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { RiTranslate } from "react-icons/ri";
import Logo from "/public/imgs/ძირითადი-ლოგო-ai 1.png"; // შენისას დაამოწმე path

export default function SidebarResponsive() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { icon: <AiOutlineFontSize className="w-5 h-5" />, label: "გრამატიკა" },
    { icon: <RiTranslate className="w-5 h-5" />, label: "ტექსტის შემდგენლობა" },
    { icon: <FaMicrophone className="w-5 h-5" />, label: "ხმა → ტექსტი" },
    { icon: <FaWaveSquare className="w-5 h-5" />, label: "ტექსტი → ხმა" },
    { icon: <FaFilePdf className="w-5 h-5" />, label: "PDF კონვერტაცია" },
  ];

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0a1f4d] text-white">
        <div className="flex items-center gap-3 p-4">
          <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg">ENAGRAM</span>
        </div>

        <nav className="flex-1 mt-4">
          <ul className="space-y-2 px-2">
            {menu.map((m) => (
              <li
                key={m.label}
                className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-[#0a1f4d] transition-colors"
              >
                <span className="text-lg">{m.icon}</span>
                <span className="font-medium">{m.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full py-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors">
            ტამარ ომანიძე
          </button>
        </div>
      </aside>

      <div className="flex-1 relative">
        <header className="w-full h-16 flex items-center bg-[#0a1f4d] justify-between px-4 border-b md:hidden">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-hidden
          >
            <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold  text-white">ENAGRAM</span>
          </div>

          <button
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen(true)}
            aria-label="open menu"
          >
            <FaBars className="w-6 h-6 text-gray-700" />
          </button>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          mobileOpen
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#0a1f4d] text-white transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#083055]">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg">ENAGRAM</span>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md hover:bg-white hover:text-[#0a1f4d] transition-colors"
            aria-label="close menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3">
          <ul className="space-y-2">
            {menu.map((m) => (
              <li
                key={m.label}
                className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
                  hover:bg-white hover:text-[#0a1f4d] transition-colors"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <span className="text-lg">{m.icon}</span>
                <span className="font-medium">{m.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#083055]">
          <button className="w-full py-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors">
            ტამარ ომანიძე
          </button>
        </div>
      </aside>
    </div>
  );
}
