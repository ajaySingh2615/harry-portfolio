import React, { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Team Leader",
      company: "Live App",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "Harry scaled our agency base and delivered high-impact events – consistent results every time. His strategic approach to business development is exceptional.",
      rating: 5,
    },
    {
      name: "Agency Owner",
      company: "Digital Creators Hub",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote:
        "A true business growth partner – professional, reliable, and innovative. Harry helped us achieve 40% revenue growth in just 6 months.",
      rating: 5,
    },
    {
      name: "Platform Manager",
      company: "StreamTech Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "Outstanding talent management skills. Harry brought structure to our creator program and significantly improved retention rates.",
      rating: 5,
    },
    {
      name: "Business Director",
      company: "Influencer Network",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "Harry's expertise in event management and creator partnerships is unmatched. He consistently delivers results that exceed expectations.",
      rating: 5,
    },
  ];

  const go = (n) =>
    setIdx((p) => (p + n + testimonials.length) % testimonials.length);
  const goTo = (i) => setIdx(i);

  // autoplay
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => go(1), 5000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, paused]);

  // keyboard arrows
  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const onTouchStart = (e) =>
    (touchStartX.current = e.changedTouches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const Stars = ({ n = 5 }) => (
    <div
      className="flex justify-center gap-1 mb-4"
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < n ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
            <span className="text-xs font-medium text-red-700">
              Testimonials
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            What my clients and colleagues say about working with me
          </p>
        </div>

        {/* quote panel */}
        <div
          className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* mesh accents */}
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-red-50 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-red-100 blur-2xl"
          />

          <div className="relative z-10 p-8 md:p-12">
            {/* top: avatar + identity */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={t.image}
                alt={`${t.name} — ${t.company}`}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-red-100 mr-4"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/100x100/E53935/FFFFFF?text=" +
                    t.name.charAt(0);
                }}
              />
              <div className="text-center">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-red-600 text-sm">{t.company}</div>
              </div>
            </div>

            <Stars n={t.rating} />

            {/* quote */}
            <blockquote
              className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center italic max-w-3xl mx-auto"
              aria-live="polite"
            >
              “{t.quote}”
            </blockquote>

            {/* progress bar */}
            <div className="mt-8 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`testi-progress ${
                  paused ? "paused" : ""
                } bg-red-600 h-full`}
                key={idx}
              />
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => go(-1)}
                className="rounded-full p-2 bg-white text-red-600 shadow hover:shadow-md hover:bg-red-50 transition"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === idx
                        ? "w-8 bg-red-600"
                        : "w-2.5 bg-red-200 hover:bg-red-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === idx}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="rounded-full p-2 bg-white text-red-600 shadow hover:shadow-md hover:bg-red-50 transition"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* thumbnail rail */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex gap-4 overflow-x-auto pb-2 mask-fade-x">
            {testimonials.map((p, i) => (
              <button
                key={p.name}
                onClick={() => goTo(i)}
                className={`relative shrink-0 rounded-full ring-2 transition-all ${
                  i === idx
                    ? "ring-red-600"
                    : "ring-transparent hover:ring-red-300"
                }`}
                aria-label={`Select ${p.name}`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className={`w-12 h-12 rounded-full object-cover ${
                    i === idx ? "" : "opacity-80"
                  }`}
                />
                {i === idx && (
                  <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-red-600 ring-2 ring-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Let's Build Your Success Story
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to achieve similar results? Let’s discuss how I can help you
            reach your business goals.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
