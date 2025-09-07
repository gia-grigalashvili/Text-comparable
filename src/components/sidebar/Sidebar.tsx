// SidebarResponsive.jsx
import { useState } from "react";
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
    icon: <AiOutlineFontSize className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "გრამატიკა",
    path: "/grammar",
  },
  {
    icon: <RiTranslate className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "ტექსტის შემდგენლობა",
    path: "/composition",
  },
  {
    icon: <FaMicrophone className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "ხმა → ტექსტი",
    path: "/voice-to-text",
  },
  {
    icon: <FaWaveSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "ტექსტი → ხმა",
    path: "/text-to-voice",
  },
  {
    icon: <FaFilePdf className="w-4 h-4 sm:w-5 sm:h-5" />,
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
          `flex items-center gap-[20px] px-3 sm:px-4 py-2 sm:py-3 rounded-l-[30px] cursor-pointer transition-all duration-200 text-sm sm:text-base ${
            isActive
              ? "bg-white text-[#0a1f4d] font-bold shadow-sm"
              : "text-white hover:bg-white hover:text-[#0a1f4d] hover:shadow-sm"
          }`
        }
        onClick={() => isMobile && setMobileOpen(false)}
      >
        <span className="text-base sm:text-lg flex-shrink-0">{m.icon}</span>
        <span className="font-medium truncate">{m.label}</span>
      </NavLink>
    ));

  return (
    <>
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-56 xl:w-64 bg-[#0a1f4d] text-white  shadow-2xl z-40 flex-col">
        <div className="flex items-center gap-2 xl:gap-3 p-3 xl:p-4 border-b border-[#083055]">
          <img
            src={Logo}
            alt="logo"
            className="w-8 h-8 xl:w-10 xl:h-10 object-contain flex-shrink-0"
          />
          <span className="font-bold text-base xl:text-lg">ENAGRAM</span>
        </div>
        <nav className="flex-1 mt-2 xl:mt-4 overflow-y-auto">
          <ul className="space-y-1 xl:space-y-2  pl-6">{renderMenu()}</ul>
        </nav>
        <div className="p-3 xl:p-4 border-t border-gray-700">
          <button className="w-full py-2 text-sm xl:text-base bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            ტამარ ომანიძე
          </button>
        </div>
      </aside>

      {/* Mobile Header Bar - Fixed at top on smaller screens */}
      <header className="fixed top-0 left-0 right-0 w-full h-14 sm:h-16 flex items-center bg-[#0a1f4d] justify-between px-4 lg:hidden shadow-lg z-30">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={Logo}
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="font-semibold text-white text-sm sm:text-base">
            ENAGRAM
          </span>
        </div>
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
          onClick={() => setMobileOpen(true)}
          aria-label="open menu"
        >
          <FaBars className="w-5 h-5 sm:w-6 sm:h-6 text-gray-200" />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 w-72 sm:w-80 bg-[#0a1f4d] text-white transform transition-transform duration-300 ease-out lg:hidden shadow-2xl
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        h-full max-h-screen`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#083055]">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg">ENAGRAM</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-tl-md rounded-tr-md hover:bg-red hover:text-[#0a1f4d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="close menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <nav
          className="p-3 overflow-y-auto flex-1"
          style={{ height: "calc(100vh - 140px)" }}
        >
          <ul className="space-y-2">{renderMenu(true)}</ul>
        </nav>

        <div className="p-4 border-t border-[#083055] bg-[#083055]">
          <button className="w-full py-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
            ტამარ ომანიძე
          </button>
        </div>
      </aside>
    </>
  );
}
