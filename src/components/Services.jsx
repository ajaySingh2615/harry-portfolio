import React from "react";

const Services = () => {
  const services = [
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
        "End-to-end event management for promotional campaigns and PK (Player Killing) competitions.",
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
        "Comprehensive business growth strategies tailored to live-streaming and digital platforms.",
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
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business development and talent management solutions
            for the digital age
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-red-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Work With Me – Let's Grow Together
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let's discuss how I
            can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </button>
            <button
              onClick={() =>
                window.open("https://wh.me/+917557474744", "_blank")
              }
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
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
