import React from "react";

interface HeaderProps {
  onAddNew: () => void;
  onLanguageChange: (language: string) => void;
  selectedLanguage: string;
}

export default function Header({
  onAddNew,
  onLanguageChange,
  selectedLanguage,
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b px-4 py-3 flex items-center justify-between">
      {/* Language Selector */}
      <div className="flex items-center gap-4">
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ქართული">ქართული</option>
          <option value="English">English</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="w-4 h-4" />
          ტექსტის შედარება
        </label>
      </div>

      {/* Add button */}
      <button
        onClick={onAddNew}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        + ახლის დამატება
      </button>
    </header>
  );
}
