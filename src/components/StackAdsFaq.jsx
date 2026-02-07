import { useState } from "react";

const faqs = [
  {
    q: "What is Stack Ads?",
    a: "Stack Ads is a developer-first advertising solution that connects brands and employers to the world’s most trusted developer community, delivering unmatched engagement and measurable outcomes.",
  },
  {
    q: "What audience can I reach on Stack Overflow?",
    a: "Stack Overflow is the largest community of developers, technical decision-makers and technology enthusiasts with millions of monthly visitors.",
  },
  {
    q: "How do I advertise on Stack Overflow?",
    a: "Stack Ads solutions enable you to place ads and sponsored content directly within the developer workflow, using precision, skill-based targeting to reach the right technical buyers and decision-makers.",
  },
  {
    q: "What types of advertising formats are available?",
    a: "Stack Ads offers a wide range of native and display formats, including display ads, technical content sponsorships and company pages.",
  },
  {
    q: "What are the available targeting options?",
    a: "Stack Ads provides precision skill-based targeting, allowing you to reach developers based on specific tags, user intent, role, historical behavior, and technology segmentation.",
  },
  {
    q: "Does Stack Overflow offer employer branding solutions?",
    a: "Yes. Stack Ads connects employer brands with developers where they go to learn, solve problems, and grow their careers.",
  },
   {
    q: "How do i  get gtarted with an advertising compaign on stack overflow ?",
    a: "The best way to get started is by connecting with our team. CSM support is available for media ROI and content strategy, along with clear campaign dashboards to help define goals, manage budgets, and launch a developer marketing campaign efficiently..",
  },
  
];

export default function StackAdsFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-orange-500 text-3xl font-bold">❓</span>
        <div>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Q&A is our specialty, find out more about Stack Ads.
          </p>
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="space-y-3">
        {faqs.map((item, index) => (
          <div key={index} className="bg-slate-200 rounded">

            {/* QUESTION */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold"
            >
              {item.q}
              <span className="text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
