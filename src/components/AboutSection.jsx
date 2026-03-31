export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-snug text-gray-900">
            We Make Your Business{" "}
            <span className="text-red-500">Smarter</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We're more than just an IT company — we are your strategic partner
            in digital transformation. From web development and AI solutions
            to digital marketing, we help businesses grow faster and smarter.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-6">

            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
              ✔ Award Winning
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
              ✔ Professional Team
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
              ✔ End-to-End Solutions
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
              ✔ Affordable Pricing
            </span>

          </div>

          {/* BUTTON */}
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg">
            Read More →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-xl flex items-center justify-center text-lg text-gray-500">
            Your Image / Illustration
          </div>
        </div>

      </div>

    </section>
  );
}