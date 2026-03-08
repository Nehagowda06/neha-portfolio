export default function AboutPage() {

  return (

    <main className="bg-[#eef1fb] min-h-screen pt-28 pb-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}

        <h1 className="text-4xl font-bold text-gray-900 mb-14">
          About Me
        </h1>


        {/* Layout */}

        <div className="grid md:grid-cols-[260px_1fr] gap-14 items-start">


          {/* Photo */}

          <div className="flex justify-center md:justify-start">

            <div className="w-56 h-56 rounded-full overflow-hidden bg-[#d9ddf6] flex items-center justify-center text-gray-500 shadow-md">

              <img
                src="/profile.jpeg"
                className="w-full h-full object-cover"
              />

            </div>

          </div>


          {/* Text */}

          <div className="text-gray-600 leading-relaxed space-y-6 max-w-3xl">

            <p>
              I am an Artificial Intelligence and Data Science student at
              GSSS Institute of Engineering and Technology for Women, Mysuru,
              currently maintaining a CGPA of 9.26. My primary interests lie
              in backend systems, distributed architectures, and computational
              modeling.
            </p>

            <p>
              I enjoy understanding how complex systems behave and translating
              that understanding into software. My work often focuses on
              building backend infrastructure, designing clear data flows,
              and exploring how computation can model real-world processes.
            </p>

            <p>
              One of my main projects is Consent Ledger, a backend system
              designed to record and verify enterprise consent events in a
              transparent and auditable way. The project is currently being
              incubated at the GSSS Technology Business Incubator where I am
              refining the system architecture and overall solution design.
            </p>

            <p>
              I have also contributed to Quantum Reaction Pathways, a
              computational project exploring how chemical reaction mechanisms
              can be modeled using principles from quantum mechanics.
            </p>

            <p>
              Currently I am developing RetryStorm, a micro-SaaS style backend
              system focused on improving retry strategies and fault tolerance
              in distributed systems, allowing experimentation with reliability
              patterns and backend architecture.
            </p>

          </div>

        </div>

      </div>

    </main>

  )

}