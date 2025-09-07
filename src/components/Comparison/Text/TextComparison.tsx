import React from "react";

interface TextComparisonProps {
  renderDiffText: (diffArray: any[]) => JSX.Element[];
  handleLeftTextChange: (value: string) => void;
  handleRightTextChange: (value: string) => void;
  leftText: string;
  rightText: string;
  hasCompared: boolean;
  leftDiff: any[];
  rightDiff: any[];
  texts: any;
  ArrowLeftRight: React.ElementType;
}

export default function TextComparison({
  renderDiffText,
  handleLeftTextChange,
  leftText,
  hasCompared,
  leftDiff,
  texts,
  rightText,
  handleRightTextChange,
  ArrowLeftRight,
  rightDiff,
}: TextComparisonProps) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 relative">
        {/* Left Text Area */}
        <div className="space-y-4">
          {!hasCompared && (
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700">{texts.firstText}</h3>
              <div className="text-sm text-gray-500">
                {leftText.length} {texts.characters}
              </div>
            </div>
          )}
          {!hasCompared ? (
            <textarea
              value={leftText}
              onChange={(e) => handleLeftTextChange(e.target.value)}
              placeholder={texts.placeholder1}
              className="w-full h-96 p-4 border border-gray-300 bg-[#F0F7FF] rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          ) : (
            <div className="h-96 p-4 border border-gray-300 rounded-md bg-[#F0F7FF] overflow-y-auto">
              <div className="whitespace-pre-wrap leading-relaxed">
                {leftDiff.length > 0 ? renderDiffText(leftDiff) : leftText}
              </div>
            </div>
          )}
        </div>

        {/* Right Text Area */}
        <div className="space-y-4">
          {!hasCompared && (
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700">{texts.secondText}</h3>
              <div className="text-sm text-gray-500">
                {rightText.length} {texts.characters}
              </div>
            </div>
          )}
          {!hasCompared ? (
            <textarea
              value={rightText}
              onChange={(e) => handleRightTextChange(e.target.value)}
              placeholder={texts.placeholder2}
              className="w-full h-96 p-4 border bg-[#F0F7FF] border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          ) : (
            <div className="h-96 p-4 border bg-[#F0F7FF] border-gray-300 rounded-md overflow-y-auto">
              <div className="whitespace-pre-wrap leading-relaxed">
                {rightDiff.length > 0 ? renderDiffText(rightDiff) : rightText}
              </div>
            </div>
          )}
        </div>

        {/* Arrow */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowLeftRight className="w-8 h-8 opacity-60 text-gray-400" />
        </div>

        {/* Legend */}
        {hasCompared && (
          <div className="mt-6 flex items-center gap-6 text-sm col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border-red-200 border rounded"></div>
              <span className="text-gray-600">{texts.deletedText}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border-green-200 border rounded"></div>
              <span className="text-gray-600">{texts.addedText}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
