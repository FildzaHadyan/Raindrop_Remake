export default function BlogCard({
  title,
  image,
  date,
  desc,
  author,
  authorAvatar,
  claps = 0,
  comments = 0,
  saved = false,
}) {
  return (
    <div className="flex flex-row items-stretch bg-white border-b border-gray-200 py-8 px-2 md:px-0">
      {/* Left: Main content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Author row */}
        <div className="flex items-center mb-2">
          <img
            src={authorAvatar || "/images/avatar.jpeg"}
            alt="author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-black font-semibold mr-2">
            {author || "Rustem Mussabekov"}
          </span>
        </div>
        {/* Title and desc */}
        <div className="mb-2">
          <h3 className="font-bold text-2xl mb-1 text-black leading-tight">
            {title}
          </h3>
          <p className="text-gray-700 text-base mb-2 line-clamp-2">{desc}</p>
        </div>
        {/* Meta row */}
        <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 11V5a2 2 0 012-2h6a2 2 0 012 2v6" />
              <path d="M7 11v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              <path d="M7 11h10" />
            </svg>
            {claps}
          </span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z" />
            </svg>
            {comments}
          </span>
          <span className="flex items-center">
            <svg
              className={`w-5 h-5 mr-1 ${
                saved ? "text-black" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
            </svg>
            Save
          </span>
        </div>
      </div>
      {/* Right: Thumbnail */}
      <div className="ml-6 flex-shrink-0 flex items-center">
        <img
          src={image}
          alt="thumbnail"
          className="w-36 h-28 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
