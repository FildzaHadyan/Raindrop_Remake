import { useState } from "react";

const features = [
  {
    key: "collections",
    icon: "📁",
    title: "Collections",
    desc: (
      <>
        Group related bookmarks within the same context.
        <br />
        Thousands of predefined icons.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/collections.png",
  },
  {
    key: "tags",
    icon: "#",
    title: "Tags & filters",
    desc: (
      <>
        Add tags to classify items. Search efficiently by type, tags, or domain.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/tagsAndFilter.png",
  },
  {
    key: "duplicates",
    icon: "👻",
    title: "Duplicates and broken links",
    desc: (
      <>
        Keep it clean. We help you find duplicates and pages that are no longer
        accessible.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/duplicatesBrokenLinks.png",
    extra: <span className="ml-1 text-yellow-700">💲</span>,
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState("collections");

  return (
    <section className="relative py-24 px-0 w-full bg-white overflow-x-hidden">
      {/* Decorative brush background (optional) */}
      <img
        src="/images/backgroundImage2.jpg"
        alt="Brush"
        className="absolute left-0 top-0 w-1/3 max-w-xs opacity-30 pointer-events-none select-none"
      />
      {/* Centered content */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Top: Heading and subtitle */}
        <div className="w-full text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex flex-col items-center leading-tight">
            <span>
              Designed for{" "}
              <span className="inline-block align-middle text-4xl md:text-5xl">
                ✐
              </span>{" "}
              creatives, built for{" "}
              <span className="inline-block align-text-top text-4xl md:text-3xl">
                &#123;coders&#125;
              </span>
            </span>
          </h2>
          <h4 className="text-2xl md:text-2xl text-black mb-5 leading-snug">
            Raindrop.io is the best place to keep all your favorite books,
            songs, articles or whatever else you come across while browsing.
          </h4>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            We're not trying to reinvent the wheel; we're working on a tool that
            does everything you expect from a{" "}
            <span className="font-semibold text-black">
              modern bookmark manager.
            </span>
          </p>
        </div>
        {/* Bottom: Organize with ease and feature card side by side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
          {/* Left: Interactive feature list */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-4xl md:text-4xl font-bold mb-4 text-black leading-tight">
              Organize with ease
            </h3>
            <p className="text-xl md:text-xl text-black mb-6 max-w-2xl leading-snug">
              Raindrop.io is not just a pretty interface, it can help you
              untangle your bookmarks mess.
            </p>
            {/* Feature boxes */}
            {features.map((feature) => (
              <div
                key={feature.key}
                className={`w-full max-w-lg mb-4 transition-all duration-200 cursor-pointer ${
                  active === feature.key
                    ? "bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-3 flex items-start text-yellow-900 text-base font-medium shadow-lg"
                    : "bg-yellow-50 border border-yellow-100 rounded-lg px-4 py-3 flex items-center text-yellow-900 text-base font-medium opacity-80"
                }`}
                onMouseEnter={() => setActive(feature.key)}
                onFocus={() => setActive(feature.key)}
                tabIndex={0}
              >
                <span className={`mr-3 mt-1 text-2xl`}>{feature.icon}</span>
                <div>
                  <span className="font-semibold text-lg text-yellow-900 mb-1 flex items-center">
                    {feature.title}
                    {feature.extra && feature.extra}
                  </span>
                  {active === feature.key && (
                    <span className="text-yellow-800 font-normal block">
                      {feature.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Right: Feature card UI image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={
                features.find((f) => f.key === active)?.image ||
                "/images/raindrop-io-footer.png"
              }
              alt="Feature card UI"
              className="rounded-xl shadow-lg w-auto h-auto md:h-[600px] md:w-[700px] object-contain"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
