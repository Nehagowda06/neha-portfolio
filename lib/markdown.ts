import fs from "fs"
import path from "path"
import matter from "gray-matter"

type MarkdownData = {
  slug: string
  title?: string
  description?: string
  date?: string
  image?: string
  repo?: string
  demo?: string
  content: string
}

export function getMarkdown(folder: string): MarkdownData[] {

  const dir = path.join(process.cwd(), "content", folder)

  const files = fs.readdirSync(dir)

  return files.map((file) => {

    const slug = file.replace(".md", "")

    const fullPath = path.join(dir, file)

    const fileContent = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContent)

    return {
      slug,
      ...(data as Record<string, any>),
      content
    }

  })

}