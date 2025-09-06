import React from "react";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Agency Onboarding",
      icon: "🤝",
      goal: "Build strategic partnerships across India",
      action:
        "Developed comprehensive onboarding process and relationship management system",
      result:
        "Successfully onboarded 50+ agency partnerships, increasing platform reach by 300%",
      metrics: "50+ Partnerships",
    },
    {
      title: "Creator Growth",
      icon: "👥",
      goal: "Scale creator base and improve retention",
      action:
        "Implemented data-driven recruitment and retention strategies with personalized support",
      result: "Recruited and retained 1200+ creators with 85% retention rate",
      metrics: "1200+ Creators",
    },
    {
      title: "PR/PK Events",
      icon: "🎯",
      goal: "Design and execute high-impact promotional events",
      action:
        "Created comprehensive event management framework with ROI tracking",
      result:
        "Successfully managed 150+ events with 95% success rate and high engagement",
      metrics: "150+ Events",
    },
    {
      title: "Revenue Growth",
      icon: "📈",
      goal: "Drive sustainable revenue increase for platforms",
      action:
        "Implemented strategic business development initiatives and performance optimization",
      result:
        "Achieved consistent 25-40% revenue lift across multiple platforms",
      metrics: "25-40% Growth",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real work & achievements that showcase my expertise in business
            development and talent management
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{study.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {study.title}
                    </h3>
                    <div className="text-red-600 font-semibold">
                      {study.metrics}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🎯 Goal
                    </h4>
                    <p className="text-gray-600">{study.goal}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      ⚡ Action
                    </h4>
                    <p className="text-gray-600">{study.action}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🏆 Result
                    </h4>
                    <p className="text-gray-600">{study.result}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Impact Delivered
                    </div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      High Impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Portfolio Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Portfolio Highlights</h3>
              <p className="text-red-100 text-lg">
                Key achievements across my career
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">7+</div>
                <div className="text-red-100 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">80+</div>
                <div className="text-red-100 text-sm">Agencies Onboarded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1200+</div>
                <div className="text-red-100 text-sm">Creators Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-red-100 text-sm">Events Executed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
