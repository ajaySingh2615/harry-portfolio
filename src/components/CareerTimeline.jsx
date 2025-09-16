import React from "react";

const CareerTimeline = ({ items = [] }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* center rail */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] rounded-full
                   bg-gradient-to-b from-red-200 via-red-400/50 to-red-200"
      />

      <ul className="space-y-14">
        {items.map((item, i) => {
          const goRight = i % 2 === 1; // odd indexes on the right
          return (
            <li
              key={`${item.company}-${i}`}
              className="relative grid md:grid-cols-9 gap-6 items-center animate-slideUp"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {/* LEFT or RIGHT card */}
              <div
                className={`md:col-span-4 ${
                  goRight
                    ? "md:col-start-6 md:text-left md:pl-6"
                    : "md:col-start-1 md:text-right md:pr-6"
                }`}
              >
                <div
                  className={`inline-flex items-center gap-2 mb-3 ${
                    goRight ? "" : "justify-end w-full"
                  }`}
                >
                  <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                {/* gradient border card */}
                <div
                  className={`bg-gradient-to-br from-red-100/50 via-white to-red-50 p-[1px] rounded-2xl inline-block`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.company}
                    </h4>
                    <p className="text-red-600 font-medium mt-1">
                      {item.position}
                    </p>
                    <p className="text-gray-600 mt-3">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* CENTER dot */}
              <div className="hidden md:flex md:col-start-5 md:col-span-1 relative justify-center">
                <span className="h-4 w-4 rounded-full bg-red-600 shadow-lg ring-8 ring-red-100 relative">
                  <span
                    className="absolute inset-0 rounded-full bg-red-400/40 ping-soft"
                    aria-hidden
                  />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CareerTimeline;
