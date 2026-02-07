export default function WhyTeamsChooseUs() {
  return (
    <section className="bg-[#f6f6f6] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-14">
          Why teams choose Stack Overflow Business
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">
              Knowledge that scales
            </h3>
            <p className="text-gray-600">
              Capture institutional knowledge in one trusted place so teams
              don’t lose answers when people move on.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">
              Faster problem solving
            </h3>
            <p className="text-gray-600">
              Reduce repeated questions and unblock developers faster with
              searchable, verified answers.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">
              Secure by design
            </h3>
            <p className="text-gray-600">
              Keep your company’s knowledge private while maintaining
              enterprise-grade security and compliance.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-[#f48024] text-black px-8 py-3 rounded-full font-semibold">
            Explore Business Solutions
          </button>
        </div>

      </div>
    </section>
  );
}
