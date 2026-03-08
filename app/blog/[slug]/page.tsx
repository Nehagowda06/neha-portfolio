import { getMarkdown } from "@/lib/markdown"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const posts = getMarkdown("blog")

  const post = posts.find(
    (p: any) => p.slug === slug
  )

  if (!post) return notFound()

  return (

    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* TITLE */}

      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>

      {post.date && (
        <p className="text-gray-500 mb-10">
          {post.date}
        </p>
      )}

      {/* MARKDOWN CONTENT */}

      <article className="prose max-w-none">

        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>

      </article>

    </main>

  )
}