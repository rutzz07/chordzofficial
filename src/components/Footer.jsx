export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">

      <div className="grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <h1 className="text-white text-xl font-bold">
            Chordz Tech
          </h1>
          <p className="mt-4 text-sm">
            We deliver excellence in web, AI, and digital solutions.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold">Services</h3>
          <ul className="mt-4 space-y-2">
            <li>Web Development</li>
            <li>AI/ML</li>
            <li>SEO</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <p className="mt-4 text-sm">
            Pune, India <br />
            chordzconnect@gmail.com <br />
            +91 XXXXXXXX
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Chordz Tech. All rights reserved.
      </div>

    </footer>
  );
}