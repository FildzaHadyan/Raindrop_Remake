import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Raindrop Logo and Text */}
        <div className="flex items-center">
          <div>
            <img
              src="/icons/raindroplogo.png"
              alt="Raindrop.io logo"
              className="mx-auto w-8 h-auto"
            />
          </div>
          <a
            href="/"
            className="text-black hover:text-gray-800 flex items-baseline"
          >
            <span className="ml-2 text-black">
              RAINDROP<sup className="text-sm relative top-[-0.1em]">.IO</sup>
            </span>
          </a>
        </div>
        {/* Center: Navigation Links */}
        <div className="flex-grow flex justify-center items-center space-x-6 md:flex">
          <a
            href="/download"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1"
          >
            Download
          </a>
          <a
            href="/pro/buy"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1"
          >
            Pricing
          </a>
          <a
            href="/integrations"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1"
          >
            Integrations
          </a>
          <a
            href="/blog"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1"
          >
            Blog
          </a>
          <a
            href="/about"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1"
          >
            About
          </a>
        </div>
        {/* Right: Login Button with Icon */}
        <div className="flex items-center space-x-2">
          <a
            href="/account/login"
            className="text-neutral-950 hover:bg-gray-100 px-2 py-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.125 0 017.5 0zM4.505 18.75h15.739a3.375 3.375 0 003.37-3.385c0-1.762-1.258-3.238-3.003-3.238H4.137c-1.745 0-3.003 1.476-3.003 3.238a3.375 3.375 0 003.37 3.385z"
              />
            </svg>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
