import React from "react";
import CareerTimeline from "./CareerTimeline";
import SkillsMatrix from "./SkillsMatrix";

const About = () => {
  const skills = [
    { name: "Business Development", level: 92, group: "Strategy" },
    { name: "Talent Management", level: 90, group: "Talent Ops" },
    { name: "PR Events", level: 85, group: "Marketing" },
    { name: "Partnerships", level: 88, group: "Strategy" },
    { name: "Digital Marketing", level: 80, group: "Marketing" },
    { name: "Analytics", level: 78, group: "Analytics & Tools" },
  ];

  const timeline = [
    {
      year: "2017–2019",
      company: "Bigo Live (Asia Innovations Group)",
      position: "Business Development Manager",
      description:
        "Led strategic partnerships and business growth initiatives in the live-streaming industry.",
    },
    {
      year: "2019–2021",
      company: "OyeTalk",
      position: "Talent Manager & Specialist",
      description:
        "Managed talent acquisition and retention strategies, growing creator base significantly.",
    },
    {
      year: "2021–Present",
      company: "Mika Live",
      position: "Talent Manager & Specialist",
      description:
        "Driving talent management excellence and strategic business development.",
    },
  ];

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917557474744?text=Hi%20Harinder%2C%20let%27s%20connect!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* soft mesh blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(229,57,53,.22), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(211,47,47,.18), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 noise">
        {/* Section head */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
            <span className="text-xs font-medium text-red-700">About Me</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            A bit about <span className="gradient-text">Harinder</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Business developer & talent manager helping platforms, agencies, and
            creators grow with partnerships, creator operations, and data-backed
            strategy.
          </p>
        </div>

        {/* Bio + Photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start animate-fadeIn">
            <div className="relative group">
              {/* conic ring */}
              <div
                aria-hidden
                className="absolute inset-0 -m-4 rounded-[2rem] animate-spin-slow opacity-70"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(229,57,53,.35), rgba(211,47,47,.15), transparent 60%)",
                }}
              />
              <div className="relative p-1 rounded-[2rem] bg-white shadow-2xl">
                <div className="w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] rounded-[1.75rem] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="https://res.cloudinary.com/dcrk1fzah/image/upload/v1758004988/photo-2_yrrljk.jpg"
                    alt="Harinder Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/520x520/E53935/FFFFFF?text=HK";
                    }}
                  />
                </div>
              </div>

              {/* floating badge */}
              <div aria-hidden className="absolute -bottom-6 -left-6">
                <div className="glass rounded-xl border border-white/50 px-4 py-3 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">
                    Based in Gurgaon
                  </div>
                  <div className="text-xs text-gray-600">
                    Remote & On-site available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-semibold text-gray-900">
              Business Development Professional
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I help platforms grow through agency hiring, creator onboarding,
              PK event design, and strategic partnerships. I also mentor
              creators and agencies to achieve consistent revenue growth using
              data-driven playbooks.
            </p>

            {/* Bulleted value points */}
            <ul className="space-y-3">
              {[
                "Agency building & creator funnels that convert",
                "Host performance frameworks & weekly PK/PR calendars",
                "Partnerships, payouts, incentives & compliance ops",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.6L4 14l5 5 11-11-1.5-1.4z" />
                  </svg>
                  <span className="text-gray-700">{line}</span>
                </li>
              ))}
            </ul>

            {/* Quick stats & CTAs */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-red-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600">7+</div>
                <div className="text-sm text-gray-600">Years in Industry</div>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600">25–40%</div>
                <div className="text-sm text-gray-600">Revenue Growth</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/resume/Mr.%20Harry.pdf"
                className="btn-secondary text-center"
                download="Mr. Harry.pdf"
              >
                Download CV
              </a>
              <button onClick={openWhatsApp} className="btn-primary">
                Let’s Connect
              </button>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Career <span className="gradient-text">Timeline</span>
          </h3>
          <CareerTimeline items={timeline} />
        </div>

        {/* Skills Matrix */}
        <div className="mt-20">
          <SkillsMatrix items={skills} />
        </div>
      </div>
    </section>
  );
};

export default About;
