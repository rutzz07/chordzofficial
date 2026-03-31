import Footer from "../components/Footer";

export default function Partners() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900">

        {/* HERO SECTION */}
        <section className="bg-[#0b3a66] text-white text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Trusted Partners
          </h1>
          <p className="mt-4 text-sm md:text-lg text-slate-200">
            We proudly collaborate with leading brands to deliver innovation and impact.
          </p>
        </section>

        {/* PARTNERS LOGOS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-20">

            {/* PARTNER 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
              <img
                src="https://via.placeholder.com/120x120?text=Partner+1"
                alt="Partner 1"
                className="h-24 w-24 object-contain"
              />
            </div>

            {/* PARTNER 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
              <img
                src="https://via.placeholder.com/120x120?text=Partner+2"
                alt="Partner 2"
                className="h-24 w-24 object-contain"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}