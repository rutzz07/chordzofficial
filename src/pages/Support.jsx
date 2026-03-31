import Footer from "../components/Footer";

export default function Support() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900 py-16">

        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold">Support</h1>
          <p className="text-gray-600 mt-2">
            We're here to help you with anything you need.
          </p>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* CONTACT INFO */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">
              Contact Information
            </h2>

            <p className="mb-3">
              <span className="font-semibold">Email:</span>{" "}
              chordztechnologiesgmail.com
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              +91 7517311326
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">
              Need More Help?
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>

            </form>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}