"use client";

import { useState } from "react";

export function CrowdfundingVideo() {
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);

  return (
    <>
      {isVideoLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#105bab] border-t-transparent" />
        </div>
      )}
      <iframe
        src="https://drive.google.com/file/d/1kja9R4gTfWO5jLdq0nAdJ6SU7-4vnUfJ/preview"
        title="TBRe25 Crowdfunding Campaign"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsVideoLoading(false)}
      />
    </>
  );
}
