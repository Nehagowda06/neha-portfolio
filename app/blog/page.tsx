import { getMarkdown } from "@/lib/markdown"

export default function BlogPage() {

  const posts = getMarkdown("blog")

  return (

    <section className="py-24 bg-[#eef1fb] min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-12">
          Blog
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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