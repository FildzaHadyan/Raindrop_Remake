import { useState } from "react";

const features = [
  {
    key: "copies",
    icon: "📁",
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
    icon: "#",
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

export default function OfferSection() {
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
        {/* Top: Safe & secure & No limits */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Safe & secure */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
              Safe & secure
            </h2>
            <p className="text-lg md:text-xl text-black mb-4">
              SSL everywhere, 100% cloud-based architecture secured behind a
              VPC.
            </p>
            <p className="text-base text-black mb-4">
              We keep your data safe, never sold.
              <br />
              No ads & trackers. Open-source apps.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 font-semibold">
                About Raindrop.io
              </a>
              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center"
              >
                <span className="mr-1">
                  {" "}
                  <img
                    src="/icons/githubLogo.png"
                    alt="Github logo"
                    className="w-7 h-7"
                  />
                </span>
                Github
              </a>
            </div>
          </div>
          {/* No limits. Starting from $0 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
              No limits.
              <br />
              Starting from $0
            </h2>
            <p className="text-lg md:text-xl text-black mb-4">
              Unlimited bookmarks, collections, and devices.
              <br />
              Free to use indefinitely. Upgrade for premium features.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              Compare plans
            </a>
          </div>
        </div>
        {/* Bottom: Access even outside of the browser */}
        <div className="w-full text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
            Access even outside of the browser
          </h2>
          <p className="text-lg md:text-xl text-black mb-2">
            Raindrop.io is available as{" "}
            <a href="#" className="text-blue-600">
              Chrome
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Firefox
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Safari
            </a>
            , and{" "}
            <a href="#" className="text-blue-600">
              Edge
            </a>{" "}
            extension.
            <br />
            But we also have{" "}
            <a href="#" className="text-blue-600">
              Web
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Windows
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Mac
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              Linux
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              iPad
            </a>
            ,{" "}
            <a href="#" className="text-blue-600">
              iPhone
            </a>
            , and{" "}
            <a href="#" className="text-blue-600">
              Android
            </a>{" "}
            app.
          </p>
          <p className="text-lg md:text-xl text-black mb-8">
            Access your bookmarks seamlessly{" "}
            <span className="font-bold">across all your devices.</span>
          </p>
          <div className="w-full flex justify-center">
            <img
              src="/images/accessOutsideBrowser.png"
              alt="Devices preview"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              style={{ maxHeight: "60vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

//
