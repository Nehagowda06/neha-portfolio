import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getMarkdown(folder: string) {

  const dir = path.join(process.cwd(), "content", folder)

  const files = fs.readdirSync(dir)

  return files.map((file) => {

    const slug = file.replace(".md", "")

    const fullPath = path.join(dir, file)

    const content = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(content)

    return {
      slug,
      ...data
    }

  })

}