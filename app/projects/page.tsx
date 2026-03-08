import { getMarkdown } from "@/lib/markdown"
import { getRepo, getLanguages } from "@/lib/github"

export default async function ProjectsPage() {

  const projects = getMarkdown("projects")

  const enriched = await Promise.all(

    projects.map(async (p: any) => {

      const repo = await getRepo(p.repo)
      const langs = await getLanguages(p.repo)

      const total = Object.values(langs).reduce(
        (a: any, b: any) => a + b,
        0
      )

      const mainLang = Object.entries(langs)[0]

      return {
        ...p,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        lang: mainLang ? mainLang[0] : null,
        langPercent: mainLang
          ? Math.round((mainLang[1] / total) * 100)
          : null,
      }

    })

  )

  return (

    <main className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-16">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {enriched.map((p: any) => (

            <div
              key={p.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              <div className="relative">

                <img
                  src={p.image}
                  className="h-52 w-full object-cover"
                />

                {p.demo && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded">
                    LIVE DEMO
                  </span>
                )}

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {p.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {p.description}
                </p>

                <div className="flex gap-4 text-sm text-gray-500 mt-3">

                  <span>⭐ {p.stars}</span>
                  <span>🍴 {p.forks}</span>

                  {p.lang && (
                    <span>
                      🧠 {p.lang} {p.langPercent}%
                    </span>
                  )}

                </div>

                <a
                  href={`/projects/${p.slug}`}
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                >
                  View More
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  )
}