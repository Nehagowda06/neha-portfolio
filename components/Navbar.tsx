import Link from "next/link"

export default function Navbar() {

  return (

    <header className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-semibold text-lg">
          Nehagowda K S
        </h1>

        <nav className="flex gap-8 text-sm text-gray-700">

          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>

        </nav>

      </div>

    </header>

  )
}