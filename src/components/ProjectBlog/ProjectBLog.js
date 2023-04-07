import { FaRegStar, FaCodeBranch } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    href: "#",
    description: "My portfolio website",
    date: "Mar 16, 2020",
    languages: "JavaScript",
    star: "5",
    forks: "2",
    thumbnail: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    id: 2,
    title: "Blog",
    href: "#",
    description: "My blog website",
    date: "Mar 16, 2020",
    languages: "JavaScript",
    star: "5",
    forks: "2",
    thumbnail: "https://i.imgur.com/8Km9tLL.png",
  },
];

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
  },
  // More posts...
];

export default function ProjectBlog() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto shadow-md max-w-7xl px-6 lg:px-8 border-spacing-1 border rounded-xl border-gray-400">
        <div className="mx-auto max-w-5xl lg:mx-0">
          {/* Projects Section 👇 */}
          <h2 className="text-3xl font-bold tracking-tight pt-8 text-gray-900 sm:text-4xl">
            Top Projects
          </h2>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 max-w-5xl gap-x-8 gap-y-12 pb-8 sm:mt-2 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className="flex shadow-md relative max-w-2xl flex-col items-start justify-between border rounded-xl border-gray-300 p-5"
              >
                <div className="group realtive ">
                  <div className="">
                    <h3 className="mt-1 text-lg z-10 font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-base z-10 text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={project.thumbnail}
                      alt=""
                      className="absolute z-1 top-0 right-0  h-full rounded-r-xl"
                    />
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-3 text-xs">
                  <p className="relative z-10 rounded-full py-2 bg-gray-50 px-4 sm: font-medium text-gray-600 hover:bg-gray-100">
                    {project.languages}
                  </p>

                  <div className="flex items-center gap-x-2 relative z-10 rounded-full py-2 bg-gray-50 px-4  font-medium text-gray-600 hover:bg-gray-100">
                    <p>{project.star}</p>
                    <FaRegStar />
                  </div>

                  <div className="flex items-center gap-x-2 relative z-10 rounded-full py-2 bg-gray-50 px-4  font-medium text-gray-600 hover:bg-gray-100">
                    <p>{project.forks}</p>
                    <FaCodeBranch />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto max-w-5xl lg:mx-0">
          {/* blogs section 👇 */}
          <h2 className="text-3xl font-bold tracking-tight pt-8 text-gray-900 sm:text-4xl">
            Blogs
          </h2>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 max-w-5xl gap-x-8 gap-y-12 pb-8 sm:mt-2 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex shadow-md max-w-2xl flex-col items-start justify-between border rounded-xl border-gray-300 p-5"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="py-3 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
