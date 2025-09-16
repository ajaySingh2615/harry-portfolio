import React, { useMemo, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Your details
  const WHATSAPP_NUMBER = "917557474744"; // +91 7557474744 (digits only with country code)
  const EMAIL = "harrykumar241@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/mr-harry-434109173/";

  const contactMethods = useMemo(
    () => [
      {
        title: "WhatsApp",
        info: "+91 755 747 4744",
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
          </svg>
        ),
        tone: "text-green-700 bg-green-50 ring-green-200 hover:bg-green-100",
      },
      {
        title: "Email",
        info: EMAIL,
        href: `mailto:${EMAIL}`,
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        tone: "text-red-700 bg-red-50 ring-red-200 hover:bg-red-100",
      },
      {
        title: "LinkedIn",
        info: "mr-harry-434109173",
        href: LINKEDIN,
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
        tone: "text-blue-700 bg-blue-50 ring-blue-200 hover:bg-blue-100",
      },
    ],
    []
  );

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const buildWhatsAppText = ({ name, email, phone, message }) => {
    const lines = [
      "📩 *New Portfolio Inquiry*",
      "",
      `• *Name:* ${name}`,
      `• *Email:* ${email}`,
      `• *Phone:* ${phone || "-"}`,
      "",
      `• *Message:* ${message}`,
      "",
      "— sent from Harinder’s portfolio",
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const emailFallback = ({ name, email, phone, message }) => {
    const subject = encodeURIComponent("New Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${
        phone || "-"
      }\n\nMessage:\n${message}\n\n— sent from Harinder’s portfolio`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const text = buildWhatsAppText(formData);
      const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
      const win = window.open(wa, "_blank", "noopener,noreferrer");
      if (!win) {
        // popup blocked? fall back to email compose
        window.location.href = emailFallback(formData);
      }
      setSubmitMessage("Opening WhatsApp with your message…");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden"
    >
      {/* mesh accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="h-2 w-2 rounded-full bg-red-600 inline-block" />
            <span className="text-xs font-medium text-red-700">Contact</span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            WhatsApp-first. Or email/LinkedIn — whatever you prefer.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Quick Connect (left) */}
          <aside className="lg:col-span-5">
            <div className="glass rounded-2xl border border-white/50 backdrop-blur-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Connect
              </h3>
              <ul className="divide-y divide-white/40">
                {contactMethods.map((m) => (
                  <li key={m.title} className="py-3 first:pt-0 last:pb-0">
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2 ring-1 ${m.tone} transition`}
                    >
                      <span className="shrink-0 grid place-items-center rounded-md bg-white/70 p-2">
                        {m.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 group-hover:underline">
                          {m.title}
                        </div>
                        <div className="text-sm text-gray-700 truncate">
                          {m.info}
                        </div>
                      </div>
                      <span className="ml-auto opacity-60 group-hover:opacity-100 transition">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  WhatsApp Now
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn-secondary text-center"
                >
                  Email Me
                </a>
              </div>
            </div>
          </aside>

          {/* Form (right) */}
          <main className="lg:col-span-7">
            <div className="bg-white/80 rounded-2xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {/* NAME */}
                <div className="float-field">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white
               focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                  <label htmlFor="name" className="text-sm">
                    Full Name
                  </label>
                </div>

                {/* EMAIL */}
                <div className="float-field">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white
               focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                </div>

                {/* PHONE */}
                <div className="float-field sm:col-span-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    pattern="^(\+?\d{1,3}[- ]?)?\d{10}$"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white
               focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                  <label htmlFor="phone" className="text-sm">
                    Phone / WhatsApp
                  </label>
                </div>

                {/* MESSAGE */}
                <div className="float-field sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white
               focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                  />
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                </div>

                {/* Actions */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full sm:w-auto ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending…" : "Send on WhatsApp"}
                  </button>
                  <a
                    href={emailFallback(formData)}
                    className="btn-secondary w-full sm:w-auto text-center"
                    onClick={(e) => {
                      if (
                        !formData.name &&
                        !formData.email &&
                        !formData.message
                      ) {
                        e.preventDefault();
                        alert(
                          "Please fill at least your name, email and message."
                        );
                      }
                    }}
                  >
                    Send via Email
                  </a>
                </div>
              </form>

              <p className="mt-4 text-xs text-gray-500">
                Your message opens in WhatsApp with all details pre-filled.
                Email is provided as a fallback.
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Contact;
