"use client";

import { useState } from "react";

interface ShowMoreTextProps {
  text: string;
  maxLength: number;
}

export function ShowMoreText({ text, maxLength }: ShowMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (text.length <= maxLength) {
    return <p className="mb-4 text-gray-700 whitespace-pre-line">{text}</p>;
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const showShowMoreButton = text.length > maxLength;

  return (
    <div className="mb-2">
      <p className="mb-2 text-gray-700 whitespace-pre-line">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        {showShowMoreButton && (
          <>
            {" "}
            <button
              onClick={toggleExpanded}
              className="text-tbre-yellow hover:underline inline"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </>
        )}
      </p>
    </div>
  );
}
