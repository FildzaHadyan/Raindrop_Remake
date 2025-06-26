import { useState } from "react";

const features = [
  {
    key: "highlights",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    title: "Highlights",
    desc: (
      <>
        Annotate web and easily revisit key
        <br />
        passages in the future.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/highlights.png",
  },
  {
    key: "preview",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Instant preview",
    desc: (
      <>
        Read articles, view videos, and browse the web without ever leaving your
        library.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/instantPreview.png",
  },
  {
    key: "views",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    title: "Multiple views",
    desc: (
      <>
        View bookmarks the way you like. We have Grid, Headlines, Masonry, or
        List view modes.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/multipleView.png",
  },
];

export default function BackupSection() {
  const [active, setActive] = useState("highlights");

  return (
    <section className="relative py-24 px-0 w-full bg-white overflow-x-hidden">
      {/* Decorative brush background */}
      <img
        src="/images/backgroundImage3.jpg"
        alt="Brush"
        className="absolute top-12 left-0 w-7/12 max-w-7xl opacity-30 pointer-events-none select-none"
      />
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Bottom: Organize with ease and feature card side by side */}
        <div className="w-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
          {/* Left: Feature card UI image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={
                features.find((f) => f.key === active)?.image ||
                "/images/raindropiofooter.png"
              }
              alt="Feature card UI"
              className="rounded-xl shadow-lg w-auto h-auto md:h-[525px] md:w-[1000px] object-fill"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
          </div>
          {/* Right: Interactive feature list */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-4xl md:text-4xl font-semibold mb-4 text-black leading-tight">
              See the big picture
            </h3>
            <p className="text-xl md:text-xl text-black mb-6 max-w-sm leading-snug">
              All relevant info about bookmarks visible at a glance, so you can
              find anything fast.
            </p>
            {/* Feature boxes */}
            {features.map((feature) => (
              <div
                key={feature.key}
                className={`w-6/12 max-w-lg mb-4 transition-all duration-200 cursor-pointer ${
                  active === feature.key
                    ? "bg-red-100 border border-red-200 rounded-lg px-4 py-3 flex items-start text-red-900 text-base font-medium shadow-lg"
                    : "bg-white border border-white rounded-lg px-4 py-3 flex items-center text-black text-base font-medium opacity-80"
                }`}
                onMouseEnter={() => setActive(feature.key)}
                onFocus={() => setActive(feature.key)}
                tabIndex={0}
              >
                <span className={`mr-3 mt-1 text-2xl`}>{feature.icon}</span>
                <div>
                  <span className="font-semibold text-lg text-red-900 mb-1 flex items-center">
                    {feature.title}
                    {feature.extra && feature.extra}
                  </span>
                  {active === feature.key && (
                    <span className="text-red-800 font-normal block">
                      {feature.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
