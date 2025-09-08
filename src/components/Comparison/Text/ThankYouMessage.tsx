import { FileText } from "lucide-react";

interface ThankYouMessageProps {
  onContinue: () => void;
}

export default function ThankYouMessage({ onContinue }: ThankYouMessageProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-12 text-center">
        <div className="mb-6">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            გმადლობთ გამოყენებისთვის!
          </h2>
          <p className="text-gray-600">ტექსტის შედარება წარმატებით დასრულდა</p>
        </div>
        <button
          onClick={onContinue}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          გაგრძელება
        </button>
      </div>
    </div>
  );
}
