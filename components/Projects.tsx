import { getMarkdown } from "@/lib/markdown"
import { getRepo, getLanguages } from "@/lib/github"

export default async function Projects() {

  const projects = getMarkdown("projects").slice(0, 3)

  const enriched = await Promise.all(

    projects.map(async (p: any) => {

      try {

        const repo = await getRepo(p.repo)
        const langs = await getLanguages(p.repo)

        const total = Object.values(langs).reduce(
          (a: any, b: any) => a + b,
          0
        )

        const mainLang = Object.entries(langs)[0]

        return {
          ...p,
          stars: repo?.stargazers_count ?? 0,
          forks: repo?.forks_count ?? 0,
          lang: mainLang ? mainLang[0] : null,
          langPercent: mainLang
            ? Math.round((mainLang[1] as number / total) * 100)
            : null
        }

      } catch {

        return {
          ...p,
          stars: 0,
          forks: 0,
          lang: null,
          langPercent: null
        }

      }

    })

  )

  return (

    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <a
            href="/projects"
            className="text-indigo-600 font-medium hover:underline"
          >
            View All →
          </a>

        </div>


        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {enriched.map((p: any) => (

            <div
              key={p.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              {/* Image */}

              <div className="relative">

                <img
                  src={p.image}
                  className="h-44 w-full object-cover"
                />

                {p.demo && (

                  <span
                    className="absolute top-4 right-4 bg-indigo-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    LIVE DEMO
                  </span>

                )}

              </div>


              {/* Content */}

              <div className="p-6">

                <h3 className="font-semibold text-lg text-gray-900">
                  {p.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {p.description}
                </p>


                {/* Repo Stats */}

                <div className="flex gap-4 text-sm text-gray-500 mt-3">

                  <span>⭐ {p.stars}</span>

                  <span>🍴 {p.forks}</span>

                  {p.lang && (
                    <span>
                      {p.lang} {p.langPercent}%
                    </span>
                  )}

                </div>


                {/* Button */}

                <a
                  href={`/projects/${p.slug}`}
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
                >
                  View More
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}