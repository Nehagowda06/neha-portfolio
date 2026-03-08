import "./globals.css"

export const metadata = {
  title: "Nehagowda K S",
  description: "Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="bg-[#eef1fb] text-gray-900 flex flex-col min-h-screen">

        <header className="border-b border-gray-200 bg-white/70 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            <div className="font-semibold">
              Nehagowda K S
            </div>

            <nav className="flex gap-8 text-sm text-gray-600">
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </nav>

          </div>
        </header>


        <main className="flex-grow">
          {children}
        </main>


        <footer className="bg-[#0f172a] text-gray-400">
          <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center text-sm">

            <span>© 2026 Nehagowda K S</span>

            <div className="flex gap-6">

              <a
                href="https://github.com/Nehagowda06"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nehagowda-k-s"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </a>

            </div>

          </div>
        </footer>

      </body>
    </html>
  )
}