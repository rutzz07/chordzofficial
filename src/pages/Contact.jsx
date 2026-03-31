import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900 py-12">

        {/* TOP CARDS */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {/* ADDRESS */}
          <a
            href="https://www.google.com/maps/dir/18.4801368,73.947738/Chordz+Technologies+Pvt+Ltd,+tal-Haveli,+Uruli+Kanchan,+Maharashtra+412202/@18.5426848,73.9095273,12.89z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bc2e0b7a82c6a55:0x3f976a3671959748!2m2!1d74.1293186!2d18.4889756!3e0?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#05046a] text-white p-6 text-center rounded shadow hover:scale-105 transition"
          >
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-sm mt-2">
              Matoshri Building, Behind Police Station <br />
              Uruli Kanchan, Pune - 412202
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:chordzconnect@gmail.com"
            className="bg-[#05046a] text-white p-6 text-center rounded shadow hover:scale-105 transition"
          >
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm mt-2">chordzconnect@gmail.com</p>
          </a>

          {/* CALL */}
          <a
            href="tel:+917517311326"
            className="bg-[#05046a] text-white p-6 text-center rounded shadow hover:scale-105 transition"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-sm mt-2">+91 7517311326</p>
          </a>

        </section>

        {/* FORM + MAP */}
        <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>

            <form className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border p-3 rounded w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border p-3 rounded w-full"
                />
              </div>

              <textarea
                placeholder="Write Your Message"
                rows="4"
                className="border p-3 rounded w-full"
              />

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* MAP */}
          <div className="rounded overflow-hidden shadow">
           <iframe
  title="map"
  src="https://www.google.com/maps?q=Chordz+Technologies+Pvt+Ltd+Uruli+Kanchan+Pune&output=embed"
  className="w-full h-full min-h-[400px] border-0"
  allowFullScreen=""
  loading="lazy"
></iframe>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}