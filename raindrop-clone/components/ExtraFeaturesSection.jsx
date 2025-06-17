import { useState } from "react";

const features = [
  {
    key: "edit",
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
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
    title: "Edit together",
    desc: (
      <>
        Permissions let you control who can access each of your collections.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/editTogether.png",
  },
  {
    key: "public",
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
          d="M3 5h12M9 3v2m1.048 9.5H18a2 2 0 002-2V7.828c0-.538-.214-1.055-.593-1.432L14.293 3.593A1 1 0 0013.586 3H6a2 2 0 00-2 2v11.586a1 1 0 00.293.707l2.828 2.828A1 1 0 009.414 21H18a2 2 0 002-2v-1.5"
        />
      </svg>
    ),
    title: "Public page",
    desc: (
      <>
        Share individual collections with the entire web. Sign-up is not
        required.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </>
    ),
    image: "/images/publicPage.png",
  },
];

export default function ExtraFeaturesSection() {
  const [active, setActive] = useState("edit");

  return (
    <section className="relative py-24 px-0 w-full bg-white overflow-x-hidden">
      {/* Decorative brush background (optional) */}
      <img
        src="/images/backgroundImage2.jpg"
        alt="Brush"
        className="absolute left-0 top-0 w-1/3 max-w-xs opacity-30 pointer-events-none select-none"
      />
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Bottom: Organize with ease and feature card side by side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
          {/* Left: Interactive feature list */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-4xl md:text-4xl font-bold mb-4 text-black leading-tight">
              Designed to be personal.
              <br />
              Great for teamwork
            </h3>
            <p className="text-xl md:text-xl text-black mb-6 max-w-2xl leading-snug">
              Enable access to your collection by coworkers, family or the
              entire web.
            </p>
            {/* Feature boxes */}
            {features.map((feature) => (
              <div
                key={feature.key}
                className={`w-full max-w-lg mb-4 transition-all duration-200 cursor-pointer ${
                  active === feature.key
                    ? "bg-purple-100 border border-purple-200 rounded-lg px-4 py-3 flex items-start text-purple-900 text-base font-medium shadow-lg"
                    : "bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 flex items-center text-purple-900 text-base font-medium opacity-80"
                }`}
                onMouseEnter={() => setActive(feature.key)}
                onFocus={() => setActive(feature.key)}
                tabIndex={0}
              >
                <span className={`mr-3 mt-1 text-2xl`}>{feature.icon}</span>
                <div>
                  <span className="font-semibold text-lg text-purple-900 mb-1 flex items-center">
                    {feature.title}
                    {feature.extra && feature.extra}
                  </span>
                  {active === feature.key && (
                    <span className="text-purple-800 font-normal block">
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
