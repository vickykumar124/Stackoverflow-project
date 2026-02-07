import StackAdsHero from "../components/stack-ads/StackAdsHero";
import StackAdsFaq from "../components/StackAdsFaq";

import StackAdsHowItWorks from "../components/stack-ads/StackAdsHowItWorks";
import StackAdsFeatures from "../components/stack-ads/StackAdsFeatures";
import StackAdsTrust from "../components/stack-ads/StackAdsTrust";
import StackAdsCTA from "../components/stack-ads/StackAdsCTA";

export default function StackAds() {
  return (
    <div className="bg-white">

      {/* HERO (COMPONENT, NOT STATIC JSX) */}
      <StackAdsHero />

      {/* STATS */}
      <section className="px-10 py-16 grid md:grid-cols-3 gap-6">
        {[
          ["82%", "of devs visit multiple times per month"],
          ["62%", "influence tech purchase decisions"],
          ["Millions", "monthly unique visitors"]
        ].map(([value, label], i) => (
          <div
            key={i}
            className="bg-orange-500 text-white p-6 text-4xl font-bold rounded-lg"
          >
            {value}
            <p className="text-sm mt-2 font-normal">{label}</p>
          </div>
        ))}
      </section>

      {/* SECTIONS */}
      <StackAdsHowItWorks />
      <StackAdsFeatures />
      <StackAdsTrust />
      <StackAdsFaq />
      <StackAdsCTA />

    </div>
  );
}
