import { useState } from "react";

const features = [
  {
    key: "copies",
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
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Permanent copies",
    desc: (
      <>
        Even if a page you've saved is taken down, you'll still have a copy of
        it.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/permanentCopies.png",
    extra: <span className="ml-1 text-yellow-700">💲</span>,
  },
  {
    key: "dropbox",
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    ),
    title: "Dropbox & Google Drive",
    desc: (
      <>
        Save another backup to your cloud drive.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/dropboxGdrive.png",
    extra: <span className="ml-1 text-yellow-700">💲</span>,
  },
];

export default function PersonalTeamSection() {
  const [active, setActive] = useState("copies");

  return (
    <section className="relative py-24 px-0 w-full bg-white overflow-x-hidden">
      {/* Decorative brush background (optional) */}
      <img
        src="/images/backgroundImage2.jpg"
        alt="Brush"
        className="absolute left-0 top-0 w-1/3 max-w-xs opacity-30 pointer-events-none select-none"
      />
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Top: Connect to your world & Full-text search */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Connect to your world */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
              Connect to your world
            </h2>
            <p className="text-lg md:text-xl text-black mb-4">
              Want to automatically save your Twitter or Youtube favs? Need more
              complex integration?
            </p>
            <p className="text-base text-black mb-4">
              We've covered all use-cases.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 font-semibold">
                Integrations
              </a>
              <a href="#" className="text-blue-600 font-semibold">
                API
              </a>
            </div>
          </div>
          {/* Full-text search */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight flex items-center">
              Full-text search <span className="ml-2 text-lg">💲</span>
            </h2>
            <p className="text-lg md:text-xl text-black mb-4">
              The entire content of every web-page and PDF that you've saved is
              fully searchable.
            </p>
            <p className="text-base text-black mb-4">
              Look deeper beyond titles and tags.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              Learn more...
            </a>
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
          {/* Bottom: Organize with ease and feature card side by side */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
            {/* Left: Feature card UI image */}
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
            {/* Right: Interactive feature list */}
            <div className="flex flex-col items-start w-full">
              <h3 className="text-4xl md:text-4xl font-bold mb-4 text-black leading-tight">
                We've got your backup
              </h3>
              <p className="text-xl md:text-xl text-black mb-6 max-w-2xl leading-snug">
                Raindrop automatically creates copies of all web-pages and files
                in your collection.
              </p>
              {/* Feature boxes */}
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className={`w-full max-w-lg mb-4 transition-all duration-200 cursor-pointer ${
                    active === feature.key
                      ? "bg-green-100 border border-green-200 rounded-lg px-4 py-3 flex items-start text-green-900 text-base font-medium shadow-lg"
                      : "bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex items-center text-green-900 text-base font-medium opacity-80"
                  }`}
                  onMouseEnter={() => setActive(feature.key)}
                  onFocus={() => setActive(feature.key)}
                  tabIndex={0}
                >
                  <span className={`mr-3 mt-1 text-2xl`}>{feature.icon}</span>
                  <div>
                    <span className="font-semibold text-lg text-green-900 mb-1 flex items-center">
                      {feature.title}
                      {feature.extra && feature.extra}
                    </span>
                    {active === feature.key && (
                      <span className="text-green-800 font-normal block">
                        {feature.desc}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//
