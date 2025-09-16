import React, { useMemo, useState } from "react";

const Services = () => {
  const services = useMemo(
    () => [
      {
        icon: "🤝",
        title: "Agency Hiring & Onboarding",
        description:
          "Strategic recruitment and onboarding of agency partners to expand platform reach and capabilities.",
        features: [
          "Partner Vetting",
          "Onboarding Process",
          "Relationship Management",
          "Performance Tracking",
        ],
      },
      {
        icon: "👥",
        title: "Creator Acquisition & Retention",
        description:
          "Comprehensive talent management solutions to build and maintain a thriving creator community.",
        features: [
          "Talent Scouting",
          "Creator Support",
          "Retention Strategies",
          "Performance Analytics",
        ],
      },
      {
        icon: "🎯",
        title: "Event Design & Execution (PR/PK)",
        description:
          "End-to-end event management for promotional campaigns and PK competitions.",
        features: [
          "Event Planning",
          "Campaign Design",
          "Execution Management",
          "ROI Analysis",
        ],
      },
      {
        icon: "🔗",
        title: "Vendor & Merchant Partnerships",
        description:
          "Building strategic partnerships with vendors and merchants to enhance platform offerings.",
        features: [
          "Partner Identification",
          "Negotiation",
          "Contract Management",
          "Relationship Building",
        ],
      },
      {
        icon: "📊",
        title: "Business Development Strategy",
        description:
          "Comprehensive growth strategies tailored to live-streaming and digital platforms.",
        features: [
          "Market Analysis",
          "Growth Planning",
          "Strategy Implementation",
          "Performance Monitoring",
        ],
      },
      {
        icon: "💼",
        title: "Influencer Marketing & Brand Partnerships",
        description:
          "Creating valuable connections between brands and influencers for mutual growth.",
        features: [
          "Brand Matching",
          "Campaign Development",
          "Partnership Management",
          "Success Tracking",
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917557474744?text=Hi%20Harinder%2C%20I%27m%20interested%20in%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const s = services[active];

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
            <span className="text-xs font-medium text-red-700">Services</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Comprehensive business development and talent management solutions
            for the digital age.
          </p>
        </div>

        {/* layout */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT: sticky index (no cards, just list rows) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <ul className="divide-y divide-red-100 rounded-2xl border border-red-100 overflow-hidden">
                {services.map((item, i) => {
                  const isActive = i === active;
                  return (
                    <li key={item.title}>
                      <button
                        onClick={() => setActive(i)}
                        className={`w-full text-left px-5 py-4 flex items-center gap-3 transition-colors
                          ${isActive ? "bg-red-50/70" : "hover:bg-red-50/50"}`}
                        aria-selected={isActive}
                      >
                        <span className="text-xl leading-none">
                          {item.icon}
                        </span>
                        <span
                          className={`font-medium ${
                            isActive ? "text-red-700" : "text-gray-800"
                          }`}
                        >
                          {item.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* quick CTA under index */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={scrollToContact}
                  className="btn-primary flex-1"
                >
                  Get Started
                </button>
                <button onClick={openWhatsApp} className="btn-whatsapp flex-1">
                  WhatsApp
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT: detail panel (accent line, not a card) */}
          <main className="lg:col-span-8">
            <div className="relative pl-6">
              {/* accent line */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-red-200 via-red-400/60 to-red-200"
              />
              {/* header */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-600 text-lg">{s.description}</p>
              </div>

              {/* features as list rows (no cards) */}
              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                  What’s Included
                </h4>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 flex-none text-red-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M9 16.2l-3.5-3.6L4 14l5 5 11-11-1.5-1.4z" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* simple process strip */}
              <div className="mt-10">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                  Typical Process
                </h4>
                <ol className="grid md:grid-cols-3 gap-6">
                  {["Discovery", "Setup & Launch", "Scale & Optimize"].map(
                    (step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="h-7 w-7 rounded-full bg-red-600 text-white grid place-items-center text-sm font-semibold">
                          {i + 1}
                        </span>
                        <div className="text-gray-800 font-medium">{step}</div>
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* bottom actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToContact} className="btn-primary">
                  Request This Service
                </button>
                <button onClick={openWhatsApp} className="btn-whatsapp">
                  Quick WhatsApp Chat
                </button>
              </div>

              {/* SEO/Accessibility friendly overview list (collapsed style) */}
              <div className="mt-14">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                  Full Services Overview
                </h4>
                <dl className="divide-y divide-gray-200">
                  {services.map((it) => (
                    <div
                      key={it.title}
                      className="py-4 grid md:grid-cols-5 gap-4"
                    >
                      <dt className="md:col-span-2 font-semibold text-gray-900 flex items-center gap-2">
                        <span className="text-lg">{it.icon}</span> {it.title}
                      </dt>
                      <dd className="md:col-span-3 text-gray-600">
                        {it.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </main>
        </div>

        {/* CTA banner (kept) */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Work With Me — Let’s Grow Together
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let’s discuss how I
            can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all"
            >
              Get Started Today
            </button>
            <button
              onClick={openWhatsApp}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
              </svg>
              Quick WhatsApp Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
