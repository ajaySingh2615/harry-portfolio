import React, { useMemo, useState } from "react";

const Portfolio = () => {
  // ---- DATA ---------------------------------------------------------------
  const baseStudies = [
    {
      title: "Agency Onboarding",
      icon: "🤝",
      goal: "Build strategic partnerships across India",
      action:
        "Developed a comprehensive onboarding process, CRM-like tracker, and relationship rituals (weekly syncs, monthly reviews).",
      result:
        "Onboarded 50+ agency partnerships and expanded regional coverage; platform reach grew ~300%.",
      metrics: "50+ Partnerships",
      category: "Partnerships",
      impact: 92,
      tags: ["Process", "India", "Scale"],
    },
    {
      title: "Creator Growth",
      icon: "👥",
      goal: "Scale creator base and improve retention",
      action:
        "Rolled out a data-driven recruitment funnel, 30/60/90 day playbooks, and tailored support & incentives.",
      result: "Recruited and retained 1200+ creators with ~85% retention.",
      metrics: "1200+ Creators",
      category: "Growth",
      impact: 90,
      tags: ["Recruitment", "Retention", "Playbooks"],
    },
    {
      title: "PR/PK Events",
      icon: "🎯",
      goal: "Design and execute high-impact promotional events",
      action:
        "Created PR/PK event frameworks with budgets, roles, promo calendars, and ROI tracking dashboards.",
      result:
        "Managed 150+ events with ~95% success rate and strong engagement uplift.",
      metrics: "150+ Events",
      category: "Events",
      impact: 88,
      tags: ["PR", "PK", "ROI"],
    },
    {
      title: "Revenue Growth",
      icon: "📈",
      goal: "Drive sustainable revenue increase for platforms",
      action:
        "Introduced tiered payouts, KPI reviews, and optimization loops across agencies & hosts.",
      result:
        "Delivered consistent 25–40% revenue lift across multiple platforms.",
      metrics: "25–40% Growth",
      category: "Revenue",
      impact: 86,
      tags: ["Monetization", "Optimization"],
    },
  ];

  // ---- STATE --------------------------------------------------------------
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    baseStudies.forEach((s) => set.add(s.category));
    return Array.from(set);
  }, []);

  const studies = useMemo(
    () =>
      active === "All"
        ? baseStudies
        : baseStudies.filter((s) => s.category === active),
    [active]
  );

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917557474744?text=Hi%20Harinder%2C%20I%27m%20interested%20in%20a%20similar%20case%20study.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // small UI bits
  const ImpactBar = ({ value }) => (
    <div
      className="mt-4 h-2.5 w-full rounded-full bg-gray-100 overflow-hidden"
      aria-label={`Impact ${value}%`}
    >
      <span
        className="block h-full rounded-full bg-red-600 transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
            <span className="text-xs font-medium text-red-700">Portfolio</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Portfolio & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Real outcomes from business development, creator ops, and
            partnerships.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`skill-chip ${
                active === c ? "skill-chip-active" : "skill-chip-idle"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, i) => (
            <div
              key={study.title + i}
              className="group bg-gradient-to-br from-red-100/40 via-white to-red-50 p-[1px] rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <article className="bg-white rounded-2xl p-7 h-full flex flex-col shadow-sm">
                <header className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl leading-none">{study.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {study.title}
                      </h3>
                      <div className="text-red-600 font-semibold text-sm">
                        {study.metrics}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider bg-red-50 text-red-700 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </header>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      🎯 Goal
                    </h4>
                    <p className="text-gray-600">{study.goal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ⚡ Action
                    </h4>
                    <p className="text-gray-600">{study.action}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      🏆 Result
                    </h4>
                    <p className="text-gray-600">{study.result}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Impact</div>
                    <div className="text-sm font-semibold text-red-700">
                      {study.impact}%
                    </div>
                  </div>
                  <ImpactBar value={study.impact} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-full bg-white border border-red-100 text-red-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <footer className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelected(study)}
                    className="btn-secondary px-4 py-2"
                  >
                    Read Case Study
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="btn-primary px-4 py-2"
                  >
                    Discuss Similar Work
                  </button>
                </footer>
              </article>
            </div>
          ))}
        </div>

        {/* Highlights band (kept, slightly tightened) */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Portfolio Highlights</h3>
              <p className="text-red-100">Key achievements across my career</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { k: "7+", v: "Years Experience" },
                { k: "80+", v: "Agencies Onboarded" },
                { k: "1200+", v: "Creators Managed" },
                { k: "150+", v: "Events Executed" },
              ].map((x) => (
                <div key={x.v} className="text-center">
                  <div className="text-3xl font-extrabold mb-1">{x.k}</div>
                  <div className="text-red-100 text-sm">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Modal --------------------------------------------------------- */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl leading-none">{selected.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selected.title}
                </h3>
                <div className="text-red-600 font-semibold">
                  {selected.metrics}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1 bg-red-50 rounded-xl p-4">
                <div className="text-xs uppercase tracking-wider text-red-700 mb-1">
                  Category
                </div>
                <div className="font-semibold text-gray-900">
                  {selected.category}
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider text-red-700 mb-1">
                  Impact
                </div>
                <div className="font-semibold text-gray-900">
                  {selected.impact}%
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">🎯 Goal</h4>
                  <p className="text-gray-700">{selected.goal}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ⚡ Action
                  </h4>
                  <p className="text-gray-700">{selected.action}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    🏆 Result
                  </h4>
                  <p className="text-gray-700">{selected.result}</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2">
                  {selected.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-full bg-white border border-red-100 text-red-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setSelected(null)}
                className="btn-secondary"
              >
                Close
              </button>
              <button onClick={openWhatsApp} className="btn-primary">
                Discuss Similar Work
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
