import Footer from "../components/Footer";

export default function Career() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900">

        {/* HERO SECTION */}
        <section className="bg-[#0b3a66] text-white text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join Our Journey
          </h1>
          <p className="mt-4 text-sm md:text-lg text-slate-200">
            Build your future with us — Internships, Coding Classes, Full-time Roles
          </p>
        </section>

        {/* WHY JOIN US */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Join Us?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CARD 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Internship"
                className="h-28 w-full object-cover rounded"
              />
              <h3 className="mt-4 font-semibold text-lg">
                Internship Program
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Gain real-world experience with hands-on mentorship from industry experts.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Full Time"
                className="h-28 w-full object-cover rounded"
              />
              <h3 className="mt-4 font-semibold text-lg">
                Full-Time Careers
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Be part of exciting projects and make an impact in a collaborative environment.
              </p>
            </div>

          </div>
        </section>

        {/* LIFE AT COMPANY */}
        <section className="py-16 bg-[#f5f5f5] text-center">
          <h2 className="text-3xl font-semibold">Life at Our Company</h2>
          <p className="mt-2 text-gray-600">
            We work hard, learn fast, and have fun while doing it.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-6">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-lg shadow h-52 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-lg shadow h-52 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              className="rounded-lg shadow h-52 w-full object-cover"
            />

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}