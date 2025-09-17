import React from "react";

const Hero = () => {
  const scrollToPrimary = () => {
    const ids = ["portfolio", "projects", "work", "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917557474744?text=Hi%20Harinder%2C%20I%20saw%20your%20portfolio%20%E2%80%94%20let%27s%20talk!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const stats = [
    { k: "10+", v: "Years Experience" },
    { k: "700+", v: "Agencies Onboarded" },
    { k: "1500+", v: "Creators Managed" },
    { k: "150+", v: "PR/PK Events" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 pt-24"
      aria-label="Hero"
    >
      {/* mesh blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(229,57,53,.28), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(211,47,47,.22), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 noise">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-red-100 shadow-sm backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
              <span className="text-xs font-medium text-gray-700">
                Business Developer • Talent Manager
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
              Hi, I’m <span className="gradient-text">Harinder&nbsp;Kumar</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              I help brands & creators grow through live-streaming operations,
              influencer marketing, and partnerships. 10+ years building
              agencies, onboarding talent, and driving measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={scrollToPrimary} className="btn-primary">
                View My Work
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-whatsapp flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            {/* Social proof */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Trusted by teams & creators from
              </p>
              <div className="flex items-center gap-6 opacity-70">
                <span className="text-sm font-semibold text-gray-700">
                  BIGO
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  Uplive
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  Chamet
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  Likee
                </span>
              </div>
            </div>

            {/* Stats (glass) */}
            <div className="glass rounded-2xl border border-white/50 backdrop-blur-xl p-5">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
                {stats.map((s, i) => (
                  <div
                    key={s.v}
                    className="px-4 py-2 text-center animate-slideUp"
                    style={{ animationDelay: `${0.12 * (i + 1)}s` }}
                  >
                    <div className="text-3xl font-bold gradient-text leading-none">
                      {s.k}
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 mt-2">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative group">
              {/* conic ring */}
              <div
                aria-hidden
                className="absolute inset-0 -m-3 rounded-full animate-spin-slow opacity-70"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(229,57,53,.35), rgba(211,47,47,.15), transparent 60%)",
                }}
              />
              <div className="relative p-1 rounded-full bg-white shadow-2xl">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] float-animation">
                  <img
                    src="https://res.cloudinary.com/dcrk1fzah/image/upload/v1758004988/photo-1_dynczc.jpg"
                    alt="Portrait of Harinder Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x400/E53935/FFFFFF?text=HK";
                    }}
                  />
                </div>
              </div>

              {/* floating badge */}
              <div aria-hidden className="absolute -bottom-6 -left-6">
                <div className="glass rounded-xl border border-white/50 px-4 py-3 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">
                    Open to Collaborations
                  </div>
                  <div className="text-xs text-gray-600">
                    Remote • On-site (Gurgaon)
                  </div>
                </div>
              </div>

              {/* accent dot */}
              <span
                aria-hidden
                className="absolute -top-4 -right-4 inline-block h-5 w-5 rounded-full bg-red-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
