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
    <div
      className="flex flex-row items-stretch bg-white border-b border-gray-200 py-7 px-0 md:px-0"
      style={{ minHeight: 120 }}
    >
      {/* Left: Main content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between pr-6">
        {/* Author row */}
        <div className="flex items-center mb-1.5">
          <img
            src={authorAvatar || "/images/avatar.jpeg"}
            alt="author"
            className="w-7 h-7 rounded-full mr-2"
            style={{ objectFit: "cover" }}
          />
          <span className="text-[15px] text-black font-semibold mr-2 leading-none">
            {author || "Rustem Mussabekov"}
          </span>
        </div>
        {/* Title and desc */}
        <div className="mb-1.5 mt-2.5">
          <h3
            className="font-bold text-[22px] mb-2 text-black leading-tight"
            style={{ lineHeight: 1.18 }}
          >
            {title}
          </h3>
          <p
            className="text-gray-500 text-[16px] mb-0.5 line-clamp-2 leading-snug"
            style={{ fontWeight: 400 }}
          >
            {desc}
          </p>
        </div>
        {/* Meta row */}
        <div className="flex items-center space-x-5 mt-3 text-gray-500 text-[15px]">
          <span className="text-[15px] text-gray-500">{date}</span>
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
        </div>
      </div>
      {/* Right: Thumbnail */}
      <div className="ml-2 flex-shrink-0 flex items-end">
        <span className="flex items-end w-8 h-8 mr-2">
          <svg
            className={`w-5 h-5 mr-1 ${saved ? "text-black" : "text-gray-400"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
          </svg>
        </span>
        <img
          src={image}
          alt="thumbnail"
          className="w-[140px] h-[100px] object-cover rounded-lg border border-gray-200"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        />
      </div>
    </div>
  );
}
