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
    <header className="w-full px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
      <div className="absolute bottom-0 left-6 right-6 border-b border-gray-200"></div>

      <div className="flex flex-col sm:flex-row w-full gap-8">
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="border border-[#E0E0E0] rounded px-4 py-2 w-full sm:w-[220px] focus:ring-blue-500 pr-10"
        >
          <option value="ქართული">ქართული</option>
          <option value="English">English</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-gray-600 w-full sm:w-auto">
          <input type="checkbox" className="w-4 h-4" />
          ფორმატის შენარჩუნება
        </label>
      </div>

      <button
        onClick={onAddNew}
        className="bg-blue-600 text-white px-4 py-2 rounded-[8px] hover:bg-blue-700 transition md:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <span className="text-lg">+</span>
        <span>ახლის გახსნა</span>
      </button>
    </header>
  );
}
