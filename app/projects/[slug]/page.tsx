import fs from "fs"
import path from "path"
import { getMarkdown } from "@/lib/markdown"
import { notFound } from "next/navigation"
import ProjectPreview from "@/components/ProjectPreview"

async function getRepoStats(repo: string) {

  const repoRes = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 3600 },
  })

  const repoData = await repoRes.json()

  const langRes = await fetch(
    `https://api.github.com/repos/${repo}/languages`,
    { next: { revalidate: 3600 } }
  )

  const languages = await langRes.json()

  const total = Object.values(languages).reduce(
    (a: any, b: any) => a + b,
    0
  )

  const langPercent = Object.entries(languages).map(
    ([name, value]: any) => ({
      name,
      percent: Math.round((value / total) * 100),
    })
  )

  return {
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    languages: langPercent,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const projects = getMarkdown("projects")

  const project = projects.find(
    (p: any) => p.slug === slug
  )

  if (!project) return notFound()

  const folderPath = path.join(
    process.cwd(),
    "public/projects",
    slug
  )

  let images: string[] = []

  if (fs.existsSync(folderPath)) {

    images = fs
      .readdirSync(folderPath)
      .filter(
        (file) =>
          file.endsWith(".png") ||
          file.endsWith(".jpg") ||
          file.endsWith(".jpeg")
      )
      .map((file) => `/projects/${slug}/${file}`)

  }

  const stats = project.repo
    ? await getRepoStats(project.repo)
    : null

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* PREVIEW */}

      <h2 className="text-2xl font-semibold mb-6">
        Interface Preview
      </h2>

      <ProjectPreview images={images} />

      {/* TITLE */}

      <h1 className="text-4xl font-bold mt-16 mb-4">
        {project.title}
      </h1>

      <p className="text-gray-600 mb-6 text-lg">
        {project.description}
      </p>

      {/* GITHUB STATS */}

      {stats && (
        <div className="flex items-center gap-6 text-gray-700 mb-10">

          <span>⭐ {stats.stars}</span>

          <span>🍴 {stats.forks}</span>

          {stats.languages.map((lang: any) => (
            <span key={lang.name}>
              {lang.name} {lang.percent}%
            </span>
          ))}

        </div>
      )}

      {/* LANGUAGE BAR */}

      {stats && (
        <div className="flex h-2 rounded overflow-hidden mb-10">

          {stats.languages.map((lang: any, i: number) => (
            <div
              key={i}
              style={{
                width: `${lang.percent}%`,
                backgroundColor: [
                  "#3572A5",
                  "#f1e05a",
                  "#e34c26",
                  "#701516",
                  "#563d7c",
                ][i % 5],
              }}
            />
          ))}

        </div>
      )}

      {/* BUTTONS */}

      <div className="flex gap-6">

        {project.repo && (
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            View Repository
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Live Demo
          </a>
        )}

      </div>

    </main>

  )
}