type RepoStats = {
  stargazers_count: number
  forks_count: number
}

export async function getRepo(repo: string): Promise<RepoStats | null> {

  try {

    const res = await fetch(
      `https://api.github.com/repos/${repo}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) return null

    const data = await res.json()

    return {
      stargazers_count: data.stargazers_count ?? 0,
      forks_count: data.forks_count ?? 0,
    }

  } catch {
    return null
  }

}

export async function getLanguages(repo: string): Promise<Record<string, number> | null> {

  try {

    const res = await fetch(
      `https://api.github.com/repos/${repo}/languages`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) return null

    return await res.json()

  } catch {
    return null
  }

}