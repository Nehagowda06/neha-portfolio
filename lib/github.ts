export async function getRepo(repo: string) {

  const res = await fetch(
    `https://api.github.com/repos/${repo}`,
    { next: { revalidate: 3600 } }
  )

  return res.json()

}

export async function getLanguages(repo: string) {

  const res = await fetch(
    `https://api.github.com/repos/${repo}/languages`,
    { next: { revalidate: 3600 } }
  )

  return res.json()

}