import React from "react";

const tabs = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Go to App", href: "/" },
];

export default function BlogTabs() {
  return (
    <div className="flex space-x-7 text-sm font-medium border-b border-gray-200 pb-2 mb-6">
      {tabs.map((tab) => (
        <a
          key={tab.label}
          href={tab.href}
          className={
            tab.active
              ? "border-b-2 border-black pb-1 text-black"
              : "text-gray-500 hover:text-black"
          }
          style={{
            paddingBottom: "6px",
            fontWeight: tab.active ? 500 : 300,
            fontSize: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
