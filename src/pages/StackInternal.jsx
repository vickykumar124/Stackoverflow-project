import InternalConfidence from "../components/stack-internal/InternalConfidence";
import InternalBeforeAfter from "../components/stack-internal/InternalBeforeAfter";
import InternalCTA from "../components/stack-internal/InternalCTA";
import InternalKnowledgeFlow from "../components/stack-internal/InternalKnowledgeFlow";

export default function StackInternal() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#071a52] text-white px-12 py-24 flex items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <span className="inline-block bg-blue-500 text-xs px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Knowledge intelligence layer
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            From question to trusted <br />
            knowledge — automatically
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Every question is captured, improved by AI, verified by humans,
            and reused across your team — without losing context.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="ml-auto hidden lg:flex items-center">
          <InternalKnowledgeFlow />
        </div>
      </section>

      {/* SECTIONS */}
      <InternalConfidence />
      <InternalBeforeAfter />
      <InternalCTA />
    </>
  );
}
