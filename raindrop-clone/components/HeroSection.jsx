export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/backgroundImage.jpg')",
        backgroundSize: "50% auto",
        backgroundPosition: "95% 60%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
      {/* No overlay here! */}
      <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center min-h-screen z-10">
        {/* Left: Text Content */}
        <div
          className="text-left w-full md:pr-10 md:pl-64 flex flex-col justify-center"
          style={{ maxWidth: 750 }}
        >
          <h1 className="text-5xl md:text-5xl font-semibold mb-6 text-black leading-tight">
            All-in-one bookmark manager
          </h1>
          <h4 className="text-xl md:text-2xl mb-8 text-black font-normal">
            Intuitive. Powerful. Runs everywhere.
          </h4>
          <div className="space-x-4 mb-10">
            <button className="bg-blue-500 text-white px-8 py-3 rounded font-semibold shadow hover:bg-blue-600 transition text-lg">
              Sign up
            </button>
            <button className="text-blue-500 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition text-lg">
              Download app
            </button>
          </div>
        </div>
        {/* Right: Video Player */}
        <div className="flex justify-end md:justify-end">
          <div className="w-full overflow-hidden shadow-2xl border border-gray-200 aspect-video">
            <video
              width={900}
              height={600}
              autoPlay
              loop
              muted
              playsInline
              controls
              src="/videos/raindrop_intro.mp4"
              className="w-full h-[420px] object-fill"
              poster="/images/raindropiofooter.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
