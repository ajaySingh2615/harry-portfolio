import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wh.me/+917557474744", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">Harinder Kumar</span>
              <br />
              <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl">
                Business Developer & Talent Manager
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              7+ years building agencies, managing creators, and driving growth
              in live-streaming and influencer platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="btn-primary transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-whatsapp transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div
                className="text-center animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">7+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div
                className="text-center animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">80+</div>
                <div className="text-sm text-gray-600">Agencies Onboarded</div>
              </div>
              <div
                className="text-center animate-slideUp"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  1200+
                </div>
                <div className="text-sm text-gray-600">Creators Managed</div>
              </div>
              <div
                className="text-center animate-slideUp"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">PR/PK Events</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl float-animation">
                <img
                  src="https://res.cloudinary.com/dcrk1fzah/image/upload/v1756983308/Untitled_design_cr0co9.png"
                  alt="Harinder Kumar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400/E53935/FFFFFF?text=HK";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full animate-bounce-slow"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-200 rounded-full animate-bounce-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
