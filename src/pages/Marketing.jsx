import Footer from "../components/Footer";

export default function Marketing() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#05046a]">

          {/* Right Image */}
          <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80"
              alt="Digital Marketing"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          {/* Diagonal Shape */}
          <div className="absolute right-[25%] top-0 hidden h-full w-64 skew-x-[-35deg] bg-gradient-to-b from-purple-300/60 to-purple-700/60 lg:block" />

          <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-8 py-16">

            <div className="flex items-center gap-6">

              {/* DIGITAL MARKETING ICON */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="Digital Marketing"
                className="h-20 w-20 object-contain"
              />

              <div>
                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  Digital Marketing
                </h1>
                <p className="text-sm text-slate-300 mt-2">
                  Strategic Growth for Your Business
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="bg-[#e5e5e5] py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 items-center">

            {/* LEFT TEXT */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Social Media Marketing (SMM) Service
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base">
                The popularity of social media has been increasing ever since it
                has come into existence. And as a smart digital marketing firm,
                Search ensures to encash this popularity in your favor. Most of
                the internet-using population also uses social media actively,
                making it a great space to promote products and services.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Our expertise lies in grabbing attention and piquing the
                interest of the viewer on social media platforms. Be in front of
                your audience all the time, whether on their laptop, desktop,
                tabs, or mobile phone, or various social media platforms and
                their favorite website.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Reach out to those who need, understand, and are going to love
                your product & service. Increase your website traffic organically
                via SEO and let them discover more at your website. Get ready to
                hit your business goal with your timely presence.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg"
                alt="Digital Marketing Board"
                className="w-full rounded-md shadow-lg"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}