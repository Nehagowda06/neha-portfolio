export default function Hero() {

  return (

    <section className="bg-[#eef1fb] pt-28 pb-32">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">

            Hi, I'm

            <span className="block text-primary mt-3">
              Nehagowda K S
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">

            I build backend systems and explore distributed architectures.
            My work focuses on APIs, system reliability, and computational
            models of real-world processes.

          </p>

          <p className="mt-4 text-lg text-gray-600 max-w-lg leading-relaxed">

            Currently building RetryStorm, a micro-SaaS backend system for retry
            orchestration and fault tolerance in distributed systems.

          </p>

          <p className="mt-4 text-sm text-gray-500 tracking-wide">
            Backend Engineering • Distributed Systems • Scientific Computing
          </p>

          <a
            href="https://github.com/Nehagowda06"
            target="_blank"
            className="inline-block mt-10 px-8 py-3 rounded-xl text-white bg-primary shadow-md
            hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]
            hover:-translate-y-0.5
            transition-all duration-300"
          >
            View My Work
          </a>

        </div>


        <div className="bg-[#d9ddf6] p-10 rounded-3xl shadow-xl flex justify-center">

	 <img
  	   src="/Hero.svg"
  	   alt="Developer illustration"
  	   className="max-w-xs w-full"
	 />

        </div>

      </div>

    </section>

  )

}