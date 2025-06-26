import Head from "next/head";
import blogPosts from "@/data/blogPosts.json";
import BlogCard from "@/components/BlogCard";
import BlogNavbar from "@/components/BlogNavbar";
import BlogTabs from "@/components/BlogTabs";

const sidebarLinks = [
  "Help",
  "Status",
  "About",
  "Careers",
  "Press",
  "Blog",
  "Privacy",
  "Rules",
  "Terms",
  "Text to speech",
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Raindrop.io Blog</title>
      </Head>
      <div className="min-h-screen w-full bg-white">
        <BlogNavbar />
        <main className="max-w-7xl mx-auto py-0 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white lg:pl-[160px]">
          {/* Left: Blog list */}
          <div className="lg:col-span-2 pr-16 mt-10">
            <div className="mb-8 flex items-center">
              <img
                src="/icons/raindroplogo.png"
                alt="Raindrop.io logo"
                className="w-20 h-20 mr-4"
              />
              <h1 className="text-3xl font-bold text-gray-700">
                RAINDROP<sup className="text-base font-normal">.IO</sup>
              </h1>
            </div>
            <BlogTabs />
            <div>
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          {/* Right: Sticky sidebar */}
          <aside className="hidden lg:flex flex-col col-span-1 p-0 m-0 h-full">
            <div className="sticky top-0 right-0 h-[calc(100vh-0px)] flex flex-col items-center bg-white border-l border-gray-200 p-0 m-0 min-h-screen w-full">
              <div className="flex flex-col items-start px-8 pt-4 pb-2 w-full flex-1">
                <img
                  src="/icons/raindroplogo.png"
                  alt="Raindrop.io logo"
                  className="w-20 h-20 mb-4"
                />
                <span className="text-sm mb-2 text-gray-500 text-center">
                  All in one bookmark manager
                </span>
                <button className="bg-blue-500 text-white font-normal px-4 py-2 rounded-full mb-4">
                  Follow
                </button>
                <span className="text-gray-500 mb-4 text-center">
                  Connect with Raindrop.io Blog{" "}
                  <span className="inline-block align-middle text-4xl md:text-5xl">
                    <a
                      href="https://x.com/raindrop_io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons/xLogo.jpg"
                        alt="X logo"
                        className="w-7 h-7"
                      />
                    </a>
                  </span>{" "}
                </span>
                <div className="w-full my-2"></div>
                <div className="w-full">
                  <span className="block text-gray-800 font-semibold mb-2">
                    Editors
                  </span>
                  <div className="flex items-center mb-2">
                    <img
                      src="/images/avatar.jpeg"
                      alt="Rustem Mussabekov"
                      className="w-10 h-10 rounded-full mb-2"
                    />
                    <span className="font-bold text-black ml-2">
                      Rustem
                      <br />
                      Mussabekov
                    </span>
                    <button className="ml-auto border border-black rounded-full px-3 py-1 text-sm font-normal text-black">
                      Follow
                    </button>
                  </div>
                  <span className="block text-xs text-gray-600 ml-12 mb-2">
                    Founder of https://
                    <br />
                    raindrop.io
                  </span>
                </div>
              </div>
              {/* Bottom links */}
              <div className="w-full px-10 pb-20 mt-auto">
                <div className="flex flex-wrap gap-x-1 gap-y-1 text-xs text-gray-500">
                  {sidebarLinks.map((link) => (
                    <a key={link} href="#" className="hover:underline">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
