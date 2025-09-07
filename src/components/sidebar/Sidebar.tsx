// SidebarResponsive.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaMicrophone,
  FaWaveSquare,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { RiTranslate } from "react-icons/ri";
import Logo from "/public/imgs/ძირითადი-ლოგო-ai 1.png"; // path გადაამოწმე

const menu = [
  {
    icon: <AiOutlineFontSize className="w-5 h-5" />,
    label: "გრამატიკა",
    path: "/grammar",
  },
  {
    icon: <RiTranslate className="w-5 h-5" />,
    label: "ტექსტის შემდგენლობა",
    path: "/composition",
  },
  {
    icon: <FaMicrophone className="w-5 h-5" />,
    label: "ხმა → ტექსტი",
    path: "/voice-to-text",
  },
  {
    icon: <FaWaveSquare className="w-5 h-5" />,
    label: "ტექსტი → ხმა",
    path: "/text-to-voice",
  },
  {
    icon: <FaFilePdf className="w-5 h-5" />,
    label: "PDF კონვერტაცია",
    path: "/pdf",
  },
];

export default function SidebarResponsive() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderMenu = (isMobile = false) =>
    menu.map((m) => (
      <NavLink
        key={m.label}
        to={m.path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
            isActive
              ? "bg-white text-[#0a1f4d] font-bold"
              : "text-white hover:bg-white hover:text-[#0a1f4d]"
          }`
        }
        onClick={() => isMobile && setMobileOpen(false)}
      >
        <span className="text-lg">{m.icon}</span>
        <span className="font-medium">{m.label}</span>
      </NavLink>
    ));

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0a1f4d] text-white">
        <div className="flex items-center gap-3 p-4">
          <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg">ENAGRAM</span>
        </div>
        <nav className="flex-1 mt-4 overflow-y-auto">
          <ul className="space-y-2 px-2">{renderMenu()}</ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full py-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors">
            ტამარ ომანიძე
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Mobile Top Bar */}
        <header className="w-full h-16 flex items-center bg-[#0a1f4d] justify-between px-4 border-b md:hidden">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-hidden
          >
            <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-white">ENAGRAM</span>
          </div>
          <button
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen(true)}
            aria-label="open menu"
          >
            <FaBars className="w-6 h-6 text-gray-200" />
          </button>
        </header>

        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity ${
            mobileOpen
              ? "opacity-60 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } bg-black`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile Sidebar (Top-down) */}
        <aside
          className={`fixed top-0 left-0 z-50 w-full bg-[#0a1f4d] text-white transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}
          style={{ height: "70%" }} // Sidebar სიგრძე, შეცვალე საჭიროების მიხედვით
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

          <nav className="p-3 overflow-y-auto h-[calc(100%-96px)]">
            <ul className="space-y-2">{renderMenu(true)}</ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#083055]">
            <button className="w-full py-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors">
              ტამარ ომანიძე
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
