"use client";

import { useState } from "react";

interface ShowMoreTextProps {
  text: string;
  maxLength: number;
}

export function ShowMoreText({ text, maxLength }: ShowMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (text.length <= maxLength) {
    return <p className="mb-4 whitespace-pre-line text-gray-700">{text}</p>;
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const showShowMoreButton = text.length > maxLength;

  return (
    <div className="mb-2">
      <p className="mb-2 whitespace-pre-line text-gray-700">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        {showShowMoreButton && (
          <>
            {" "}
            <button
              type="button"
              onClick={toggleExpanded}
              className="inline text-tbre-yellow hover:cursor-pointer hover:underline"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </>
        )}
      </p>
    </div>
  );
}
