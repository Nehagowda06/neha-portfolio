import { getMarkdown } from "@/lib/markdown"

export default function Blog() {

  const posts = getMarkdown("blog").slice(0,3)

  return (

    <section className="py-20 bg-[#eef1fb]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Recent Blog Posts
          </h2>

          <a
            href="/blog"
            className="text-primary font-medium hover:underline"
          >
            View All →
          </a>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {posts.map((post: any) => (

            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
            >

              <h3 className="font-semibold text-lg">
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm mt-3">
                {post.description}
              </p>

              <span className="mt-4 inline-block text-primary font-medium">
                Read More →
              </span>

            </a>

          ))}

        </div>

      </div>

    </section>

  )
}