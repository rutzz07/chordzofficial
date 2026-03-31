import Footer from "../components/Footer";

export default function AI() {
  return (
    <>
      <main className="bg-[#ececec] text-slate-900">
        <section className="relative overflow-hidden bg-[#05046a]">
          <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
              alt="Engineer in front of data monitors"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="absolute right-[25%] top-0 hidden h-full w-56 skew-x-[-38deg] bg-gradient-to-b from-violet-300/70 to-violet-700/70 lg:block" />
          <div className="absolute right-[20%] bottom-0 hidden h-44 w-52 skew-x-[-38deg] bg-gradient-to-r from-sky-100 to-sky-400 lg:block" />

          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-8 py-16 md:px-14">
            <div className="flex items-center gap-6 md:gap-8">
              <img
                src="/ai.jpg"
                alt="AI robot"
                 className="h-28 w-24 rounded-md object-cover md:h-36 md:w-28"
              />
              <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                AI &amp; ML
              </h1>
            </div>
          </div>
        </section>

        <section className="h-52 overflow-hidden bg-black">
          {/* <img
            src="https://img.freepik.com/free-vector/abstract-neon-lights-background_23-2149279127.jpg?w=1600"
            alt="Abstract AI wave lines"
            className="h-full w-full object-cover opacity-95"
          /> */}
        </section>

        <section className="bg-[#929292]">
          <div className="mx-auto min-h-[520px] max-w-7xl px-8 py-10 md:px-10">
            <h2 className="max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Unleashing the potential of tomorrow: Harnessing the
              transformative power of Machine Learning and Artificial
              Intelligence to pioneer innovation and shape the future.
            </h2>
            <p className="mt-7 max-w-5xl text-sm leading-8 text-slate-100 md:text-lg">
              Harness the transformative power of Machine Learning and AI: From
              predictive analytics to personalized experiences, we sculpt
              digital innovations that redefine possibilities and elevate your
              online presence to unprecedented heights. Empower your business
              with the transformative capabilities of AI and Machine Learning.
              From analyzing data to predicting trends, our expert team
              harnesses cutting-edge technology to unlock new possibilities and
              drive unprecedented growth. Empower your digital journey with the
              intelligence of AI and Machine Learning. From data insights to
              predictive analytics, we transform possibilities into tangible
              results.
            </p>
          </div>
        </section>

        <section className="min-h-[520px] bg-[#efefef]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
            <article className="w-full max-w-lg bg-white p-8 shadow-[0_18px_30px_rgba(15,23,42,0.18)] md:p-10">
              <h3 className="text-5xl font-extrabold text-slate-900 md:text-6xl">
                Our Tag Line
              </h3>
              <div className="mt-5 h-1.5 w-20 bg-orange-500" />
              <p className="mt-8 text-base leading-9 text-slate-600 md:text-lg">
                As a relationship-driven web company, we always have the client
                and their needs at the front of our minds. We don&apos;t make
                promises we can&apos;t keep and why would we want to. Our web
                design services will take you and your business to the next
                level, ensuring success online. Empowering your online presence
                with expert website development.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
