export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/backgroundImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0" />
      <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen z-10">
        {/* Left: Text Content */}
        <div className="text-left w-full md:pr-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-black leading-tight">
            All-in-one bookmark manager
          </h1>
          <h4 className="text-xl md:text-2xl mb-10 text-black font-normal">
            Intuitive. Powerful. Runs everywhere.
          </h4>
          <div className="space-x-4 mb-10">
            <button className="bg-blue-500 text-white px-8 py-3 rounded font-semibold shadow hover:bg-blue-600 transition text-lg">
              Sign up
            </button>
            <button className="text-blue-500 border border-blue-500 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition text-lg">
              Download app
            </button>
          </div>
        </div>
        {/* Right: Video Player */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              src="/videos/raindrop_intro.mp4"
              className="w-full h-full object-cover bg-black"
              poster="/images/raindrop-io-footer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
