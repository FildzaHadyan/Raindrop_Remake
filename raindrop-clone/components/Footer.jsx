export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-5 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Links */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div>
            <a href="#" className="block text-black mb-2 hover:underline">
              Features
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              Pricing
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              Download
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              About
            </a>
          </div>
          <div>
            <a href="#" className="block text-black mb-2 hover:underline">
              Blog
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              Suggest feature
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              Help & support
            </a>
            <a href="#" className="block text-black mb-2 hover:underline">
              API
            </a>
          </div>
        </div>
        {/* Right: Logo, tagline, copyright, social */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <div className="flex items-center mb-2">
            <img
              src="/icons/raindroplogo.png"
              alt="Raindrop.io logo"
              className="w-8 h-8 mr-2"
            />
            <span className="font-bold text-lg text-gray-500">Raindrop.io</span>
          </div>
          <span className="text-gray-600 mb-2">
            All in one bookmark manager
          </span>
          <span className="text-gray-400 text-sm mb-2">
            © 2013 - 2025 SP Rustem Mussabekov
          </span>
          <div className="flex space-x-4 mt-2">
            <span className="inline-block align-middle text-4xl md:text-5xl">
              <a
                href="https://x.com/raindrop_io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/twitterLogo.png"
                  alt="Twitter logo"
                  className="w-7 h-7"
                />
              </a>
            </span>{" "}
            <a href="#" className="text-gray-500 hover:text-blue-600 underline">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 underline">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
