export default function BlogNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 flex items-center justify-between px-8 py-3">
      {/* Left: Medium logo and search bar */}
      <div className="flex items-center">
        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mr-4"
        >
          <img
            src="/images/mediumLogo.png"
            alt="Medium logo"
            className="h-12 w-auto object-contain"
            style={{ minWidth: 60 }}
          />
        </a>
        <div className="relative ml-2 w-48 md:w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            style={{ fontSize: "1rem" }}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* Right: Write, Sign up, Sign in, user icon */}
      <div className="flex items-center space-x-2 ml-6">
        <button className="flex items-center text-gray-700 hover:text-black font-medium px-3 py-2 rounded-full transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M12 20h9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Write
        </button>
        <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full">
          Sign up
        </button>
        <button className="text-gray-700 font-semibold px-5 py-2 rounded-full">
          Sign in
        </button>
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="8" r="4" strokeWidth="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}
