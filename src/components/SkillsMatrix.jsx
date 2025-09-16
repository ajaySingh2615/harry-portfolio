import React, { useMemo, useState } from "react";

const SkillsMatrix = ({ items }) => {
  // If only strings were passed, upgrade to objects with sensible defaults
  const normalized = useMemo(() => {
    const defaults = [
      { name: "Business Development", level: 92, group: "Strategy" },
      { name: "Talent Management", level: 90, group: "Talent Ops" },
      { name: "PR Events", level: 85, group: "Marketing" },
      { name: "Partnerships", level: 88, group: "Strategy" },
      { name: "Digital Marketing", level: 80, group: "Marketing" },
      { name: "Analytics", level: 78, group: "Analytics & Tools" },
    ];
    if (!items?.length) return defaults;
    if (typeof items[0] === "string") {
      // try to map known labels to defaults; fallback mid level
      const lookup = Object.fromEntries(defaults.map((d) => [d.name, d]));
      return items.map(
        (n) => lookup[n] ?? { name: n, level: 75, group: "General" }
      );
    }
    return items;
  }, [items]);

  const groups = useMemo(() => {
    const set = new Set(["All"]);
    normalized.forEach((s) => set.add(s.group || "General"));
    return Array.from(set);
  }, [normalized]);

  const [active, setActive] = useState("All");

  const data = useMemo(
    () =>
      active === "All"
        ? normalized
        : normalized.filter((s) => s.group === active),
    [active, normalized]
  );

  const labelFor = (p) =>
    p >= 90
      ? "Expert"
      : p >= 80
      ? "Advanced"
      : p >= 70
      ? "Proficient"
      : "Intermediate";

  return (
    <section className="relative">
      {/* header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900">
          Skills <span className="gradient-text">Matrix</span>
        </h3>
        <p className="text-gray-600 mt-2">
          A snapshot of what I’m strongest at
        </p>
      </div>

      {/* filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`skill-chip ${
              active === g ? "skill-chip-active" : "skill-chip-idle"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((s, i) => (
          <div
            key={s.name + i}
            className="group glass rounded-2xl border border-white/50 backdrop-blur-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              {/* radial ring */}
              <div
                className="skill-ring"
                style={{ ["--p"]: s.level, ["--size"]: "84px" }}
                aria-label={`${s.name} ${s.level}%`}
                title={`${s.level}% • ${labelFor(s.level)}`}
              >
                <span>{s.level}%</span>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-900 truncate">
                    {s.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider bg-red-50 text-red-700 px-2 py-0.5 rounded-full">
                    {labelFor(s.level)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{s.group}</p>

                {/* linear bar for extra clarity */}
                <div className="mt-3 h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                  <span
                    className="block h-full rounded-full bg-red-600 transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </div>

            {/* tiny tag row (optional) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Planning", "Execution", "Reporting"]
                .slice(0, s.level >= 85 ? 3 : s.level >= 75 ? 2 : 1)
                .map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full bg-white/70 border border-red-100 text-red-700"
                  >
                    {t}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
        <span>
          <b>Expert</b> ≥ 90
        </span>
        <span>
          <b>Advanced</b> ≥ 80
        </span>
        <span>
          <b>Proficient</b> ≥ 70
        </span>
        <span>
          <b>Intermediate</b> &lt; 70
        </span>
      </div>
    </section>
  );
};

export default SkillsMatrix;
