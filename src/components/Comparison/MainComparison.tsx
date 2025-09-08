import React, { useState, useMemo, useCallback } from "react";

import Header from "./header/Header";
import ThankYouMessage from "./Text/ThankYouMessage";
import TextComparison from "./Text/TextComparison";

interface DiffItem {
  text: string;
  type: "added" | "deleted" | "neutral";
}

interface DiffResult {
  leftDiff: DiffItem[];
  rightDiff: DiffItem[];
}

const MainComparison: React.FC = () => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [hasCompared, setHasCompared] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ქართული");
  const [isEditing, setIsEditing] = useState(false);

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
    setLeftText("");
    setRightText("");
    setHasCompared(false);
    setIsEditing(false);
  }, []);

  const handleLeftTextChange = useCallback(
    (value: string) => {
      setLeftText(value);
      if (hasCompared && !isEditing) {
        setIsEditing(true);
      }
    },
    [hasCompared, isEditing]
  );

  const handleRightTextChange = useCallback(
    (value: string) => {
      setRightText(value);
      if (hasCompared && !isEditing) {
        setIsEditing(true);
      }
    },
    [hasCompared, isEditing]
  );

  const computeDiff = useCallback(
    (text1: string, text2: string): DiffResult => {
      const words1 = text1.split(/(\s+)/);
      const words2 = text2.split(/(\s+)/);
      const leftDiff: DiffItem[] = [];
      const rightDiff: DiffItem[] = [];
      let i = 0,
        j = 0;

      while (i < words1.length || j < words2.length) {
        const word1 = words1[i] || "";
        const word2 = words2[j] || "";
        if (i >= words1.length) {
          rightDiff.push({ text: word2, type: "added" });
          leftDiff.push({ text: "", type: "neutral" });
          j++;
        } else if (j >= words2.length) {
          leftDiff.push({ text: word1, type: "deleted" });
          rightDiff.push({ text: "", type: "neutral" });
          i++;
        } else if (word1 === word2) {
          leftDiff.push({ text: word1, type: "neutral" });
          rightDiff.push({ text: word2, type: "neutral" });
          i++;
          j++;
        } else {
          leftDiff.push({ text: word1, type: "deleted" });
          rightDiff.push({ text: word2, type: "added" });
          i++;
          j++;
        }
      }
      return { leftDiff, rightDiff };
    },
    []
  );

  const { leftDiff, rightDiff } = useMemo(() => {
    if (!hasCompared || isEditing || (!leftText && !rightText))
      return { leftDiff: [], rightDiff: [] };
    return computeDiff(leftText, rightText);
  }, [leftText, rightText, hasCompared, isEditing, computeDiff]);

  const renderDiffText = useCallback(
    (diffArray: DiffItem[]) =>
      diffArray.map((item, index) => {
        const classes =
          item.type === "deleted"
            ? "bg-red-100 text-red-800 px-1 rounded"
            : item.type === "added"
            ? "bg-green-100 text-green-800 px-1 rounded"
            : "";
        return (
          <span key={index} className={classes}>
            {item.text}
          </span>
        );
      }),
    []
  );

  const handleCompare = useCallback(() => {
    if (leftText.trim() && rightText.trim()) {
      setHasCompared(true);
      setIsEditing(false);
    }
  }, [leftText, rightText]);

  const handleAddNew = useCallback(() => setShowThankYou(true), []);

  const handleContinue = useCallback(() => {
    setShowThankYou(false);
    setHasCompared(false);
    setLeftText("");
    setRightText("");
    setIsEditing(false);
  }, []);

  const canCompare = leftText.trim() && rightText.trim();
  const shouldShowComparison = hasCompared && !isEditing;

  const displayButtonText =
    selectedLanguage === "English"
      ? shouldShowComparison
        ? "Compared"
        : "Compare"
      : shouldShowComparison
      ? "შედარებულია"
      : "შედარება";

  const texts =
    selectedLanguage === "English"
      ? {
          firstText: "First Text",
          secondText: "Second Text",
          placeholder1: "Start typing...",
          placeholder2: "Start typing...",
          characters: "characters",
          deletedText: "Deleted text",
          addedText: "Added text",
          textToSpeech: "Text → Speech",
          speechToText: "Speech → Text",
          pdfConversion: "PDF Conversion",
          textComposition: "Text Composition",
          grammar: "Grammar",
        }
      : {
          firstText: "პირველი ტექსტი",
          secondText: "მეორე ტექსტი",
          placeholder1: "დაიწყე წერა...",
          placeholder2: "დაიწყე...",
          characters: "სიმბოლო",
          deletedText: "წაშლილი ტექსტი",
          addedText: "დამატებული ტექსტი",
          textToSpeech: "ტექსტი → ხმა",
          speechToText: "ხმა → ტექსტი",
          pdfConversion: "PDF კონვერტაცია",
          textComposition: "ტექსტის შემდგენლობა",
          grammar: "გრამატიკა",
        };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onAddNew={handleAddNew}
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      />

      <div className="p-6 max-w-7xl mx-auto">
        {showThankYou ? (
          <ThankYouMessage onContinue={handleContinue} />
        ) : (
          <TextComparison
            renderDiffText={renderDiffText}
            rightDiff={rightDiff}
            handleLeftTextChange={handleLeftTextChange}
            handleRightTextChange={handleRightTextChange}
            rightText={rightText}
            hasCompared={shouldShowComparison}
            leftDiff={leftDiff}
            texts={texts}
            leftText={leftText}
          />
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleCompare}
            disabled={!canCompare || shouldShowComparison}
            className={`px-6 py-2 rounded-md flex items-center gap-2 transition-all duration-200 font-medium
      ${
        shouldShowComparison
          ? "bg-green-100 text-green-800 border border-green-200 cursor-not-allowed"
          : canCompare
          ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md"
          : "bg-gray-400 text-white cursor-not-allowed"
      }`}
          >
            {displayButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComparison;
