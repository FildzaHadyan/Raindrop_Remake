import { useState } from "react";

export default function FurtherOfferSection() {
  const additionalFeatures = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17l-3 3m0 0l-3-3m3 3V3"
          />
        </svg>
      ),
      title: "Reminders",
      desc: "Add reminders and notifications to your bookmarks.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Batch processing",
      desc: "Add tags, move or remove multiple items at once.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Manual sorting",
      desc: "Arrange items in whatever way makes sense for your project.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
      title: "Upload media & files",
      desc: "All common file types, including PDFs, images, and videos.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7v4.815A2.986 2.986 0 0110.985 15h2.03C15.003 15 17 12.984 17 10V7M7 5h10a2 2 0 012 2v4a2 2 0 01-2 2h-2.015a2.986 2.986 0 00-2.03 0H7a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        </svg>
      ),
      title: "Import & Export",
      desc: "Move-in or move out from Raindrop.io at any time you want.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a4 4 0 01-4 4H7z"
          />
        </svg>
      ),
      title: "Themes",
      desc: "Light or dark, your choice.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 7h.01M7 3h5.5c.58 0 1.159.208 1.587.534l4.606 3.455a1.875 1.875 0 01.252 2.267C18.182 10.375 17 12.246 17 14v1.75c0 .66.235 1.297.662 1.725l2.495 2.495c.32.32.54.71.656 1.16a.75.75 0 01-.502.662L20 22.5c-.278-.176-.58-.337-.905-.487A2.25 2.25 0 0015.5 21H5a2 2 0 01-2-2V7.5a2.25 2.25 0 012.25-2.25h2.5c.18 0 .355.037.525.118L9 6.5"
          />
        </svg>
      ),
      title: "Merge tags",
      desc: "Keep your tags tidy by merging similar ones.",
    },
  ];

  return (
    <section className="relative py-24 px-0 w-full bg-white overflow-x-hidden">
      {/* Decorative brush background (optional) */}
      <img
        src="/images/backgroundImage2.jpg"
        alt="Brush"
        className="absolute left-0 top-0 w-1/3 max-w-xs opacity-30 pointer-events-none select-none"
      />
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            But wait, there's more
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-2">
            {additionalFeatures.map((f, i) => (
              <div key={f.title} className="flex flex-col items-start">
                <span className="text-2xl mb-2">{f.icon}</span>
                <span className="font-semibold text-lg mb-1 text-black">
                  {f.title}
                </span>
                <span className="text-black text-base leading-snug">
                  {f.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
