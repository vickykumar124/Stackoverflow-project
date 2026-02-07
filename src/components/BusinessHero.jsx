export default function BusinessHero() {
  return (
    <section className="relative bg-[#1f1f1f] text-white px-10 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            The knowledge
            <br />
            to power your
            <br />
            best work
          </h1>

          <p className="text-gray-300 mt-6 max-w-lg">
            Grounded in human thinking. Enhanced by AI.
            We’re building products that make your work
            easier, better and more secure.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold">
            View products
          </button>
        </div>

        <div className="relative flex flex-col gap-4">

         
          <div className="flex items-center">
            <div className="bg-[#8fb339] text-black font-bold text-4xl px-5 py-3">
              17
            </div>
            <div className="bg-[#dfe6ee] text-black font-bold text-4xl px-6 py-3">
              years
            </div>
            <span className="ml-4 text-gray-300 text-sm max-w-[200px]">
              of trusted and high-quality knowledge
            </span>
          </div>

        
          <div className="flex items-center ml-8">
            <div className="bg-[#ffd24d] text-black font-bold text-4xl px-5 py-3">
              83
            </div>
            <div className="bg-[#dfe6ee] text-black font-bold text-4xl px-6 py-3">
              million
            </div>
            <span className="ml-4 text-gray-300 text-sm max-w-[220px]">
              questions and answers (and counting)
            </span>
          </div>

          <div className="flex items-center ml-16">
            <div className="bg-[#a5a6ff] text-black font-bold text-4xl px-5 py-3">
              21
            </div>
            <div className="bg-[#dfe6ee] text-black font-bold text-4xl px-6 py-3">
              Seconds            </div>
            <span className="ml-4 text-gray-300 text-sm max-w-[220px]">
              between new questions, on average
            </span>
          </div>

          <div className="flex items-center ml-24">
            <div className="bg-[#f48024] text-black font-bold text-4xl px-5 py-3">
              113
            </div>
            <div className="bg-[#dfe6ee] text-black font-bold text-4xl px-6 py-3">
              billion
            </div>
            <span className="ml-4 text-gray-300 text-sm max-w-[220px]">
              times knowledge has been reused
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
