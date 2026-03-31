import Footer from "../components/Footer";

export default function Web() {
  return (
    <>
      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-[#0a0a66]">
          <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Developer working on screens"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/35" />
          </div>

          <div className="absolute right-[23%] top-0 hidden h-full w-56 skew-x-[-40deg] bg-gradient-to-b from-violet-300/80 to-violet-700/80 lg:block" />
          <div className="absolute right-[18%] bottom-0 hidden h-44 w-48 skew-x-[-40deg] bg-gradient-to-r from-sky-100 to-sky-400 lg:block" />

          <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center justify-center px-6 py-20 text-center md:px-10">
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              Web Development
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                Transforming Your Vision into Digital Reality: Crafting Websites
                that Wow!
              </h2>
              <div className="mt-8 space-y-6 text-base leading-9 text-slate-700 md:text-lg">
                <p>
                  A website is a doorway to the online world and it&apos;s the
                  first impression many people will have of your business, so
                  it&apos;s vital you make a good one. With responsive web
                  design, your business will be ready to tackle the competition
                  online through digital marketing, mainly search engine
                  optimisation. For us, it&apos;s not just about making a site,
                  it&apos;s about getting to know you and your business.
                </p>
                <p>
                  We have a close-knit team of web developers who&apos;ll work
                  with you from design to going live and even after, to ensure
                  all your needs are taken care of. Our vision, our web design
                  team take vibrant designs and combine them with functionality
                  and user experience, delivering an intuitive website that
                  will convert your users into returning customers.
                </p>
                <p>
                  Elevate your online presence with pixel-perfect precision.
                  From concept to code, we craft digital masterpieces that
                  captivate and convert.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                alt="Website mockup on a desktop display"
                className="w-full max-w-md rounded-3xl object-cover shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="relative min-h-[820px] bg-[#eef3fa]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="flex justify-end">
              <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.15)] md:p-10">
                <h3 className="text-4xl font-extrabold text-slate-950">
                  Our Tag Line
                </h3>
                <div className="mt-5 h-1.5 w-20 rounded-full bg-orange-500" />
                <p className="mt-8 text-lg leading-9 text-slate-600">
                  As a relationship-driven web company, we always have the
                  client and their needs at the front of our minds. We
                  don&apos;t make promises we can&apos;t keep and why would we
                  want to. Our web design services will take you and your
                  business to the next level, ensuring success online.
                  Empowering your online presence with expert website
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
