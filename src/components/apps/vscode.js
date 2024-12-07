import React from "react";

export default function VsCode() {
  const isLocal = process.env.NODE_ENV === "development"; // Check if running locally
  const src = isLocal
    ? "http://localhost:3000" // Replace with local URL (adjust if needed)
    : "https://bhushank19.github.io/Bhushan-Site/"; // Placeholder for GitHub Pages

  return (
    <iframe
      src={src}
      frameBorder="0"
      title="VsCode"
      className="h-full w-full bg-ub-cool-grey"
    />
  );
}


export const displayVsCode = () => {
  <VsCode> </VsCode>;
};
