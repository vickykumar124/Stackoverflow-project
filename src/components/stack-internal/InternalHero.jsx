export default function InternalHero() {
  return (
    <section className="bg-[#071a52] text-white px-12 py-24 flex items-center">
      <div className="max-w-2xl">
        <span className="inline-block bg-blue-500 text-sm px-3 py-1 rounded mb-4">
          MCP
        </span>

        <h1 className="text-5xl font-bold leading-tight">
          Second guess less, <br />
          create more with <br />
          Stack Internal
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Stack Internal collects, validates, and delivers trusted
          information at the right time, in the right place.
        </p>
      </div>

      <div className="ml-auto hidden lg:block">
        <div className="w-[400px] h-[400px] bg-orange-500 rounded-lg"></div>
      </div>
    </section>
  );
}
