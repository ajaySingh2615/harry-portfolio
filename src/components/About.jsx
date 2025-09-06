import React from "react";

const About = () => {
  const skills = [
    "Business Development",
    "Talent Management",
    "PR Events",
    "Partnerships",
    "Digital Marketing",
    "Analytics",
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
        "Currently driving talent management excellence and strategic business development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dcrk1fzah/image/upload/v1757166210/fff_aiwdvx.webp"
                  alt="Harinder Kumar - About"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400/E53935/FFFFFF?text=HK";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Business Development Professional
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Harinder (Harry), a Business Development professional with 7+
              years of experience in the live-streaming and digital industry. I
              help platforms grow through agency hiring, creator onboarding, PK
              event design, and strategic partnerships.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I also mentor creators and agencies to achieve consistent revenue
              growth, leveraging my extensive experience in talent management
              and digital marketing strategies.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">7+</div>
                <div className="text-sm text-gray-600">Years in Industry</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">25-40%</div>
                <div className="text-sm text-gray-600">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Career <span className="gradient-text">Timeline</span>
          </h3>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-2 relative z-10"></div>
                  <div className="flex-grow ml-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.company}
                      </h4>
                      <p className="text-red-600 font-medium mb-3">
                        {item.position}
                      </p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="absolute left-32 top-6 w-0.5 h-16 bg-red-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Skills <span className="gradient-text">Matrix</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center hover:from-red-100 hover:to-red-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-sm font-medium text-red-800">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
