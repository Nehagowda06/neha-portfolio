export default function Footer() {

  return (

    <footer className="bg-[#0f172a] text-gray-300 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-sm">
          © 2026 Nehagowda K S
        </p>

        <div className="flex gap-8 text-sm">

          <a href="#" className="hover:text-white transition">
            GitHub
          </a>

          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-white transition">
            Twitter
          </a>

        </div>

      </div>

    </footer>

  )
}