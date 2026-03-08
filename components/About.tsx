export default function About() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">

          <div className="w-56 h-56 rounded-full overflow-hidden shadow-md">

            <img
              src="/profile.jpeg"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            I am an Artificial Intelligence and Data Science undergraduate at
            GSSS Institute of Engineering and Technology for Women, Mysuru,
            focused on backend engineering, distributed systems, and
            scientific computing.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-lg mt-3">
            I enjoy designing structured systems that solve real problems —
            from enterprise consent management platforms to computational
            simulations of chemical reaction mechanisms.
          </p>

          <a
            href="/about"
            className="inline-block mt-6 px-6 py-3 rounded-xl text-white bg-primary shadow-md
            hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]
            hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </a>

        </div>

      </div>

    </section>

  )

}