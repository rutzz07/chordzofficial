import Footer from "../components/Footer";

export default function AppDev() {
  return (
    <>
      <main className="bg-[#efefef] text-slate-900">
        <section className="relative overflow-hidden bg-[#05046a]">
          <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="App engineer working on monitors"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="absolute right-[25%] top-0 hidden h-full w-56 skew-x-[-38deg] bg-gradient-to-b from-violet-300/70 to-violet-700/70 lg:block" />
          <div className="absolute right-[20%] bottom-0 hidden h-44 w-52 skew-x-[-38deg] bg-gradient-to-r from-sky-100 to-sky-400 lg:block" />

          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-8 py-16 md:px-14">
            <div className="flex items-center gap-6 md:gap-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                alt="Android logo"
                className="h-28 w-20 object-contain md:h-36 md:w-24"
              />
              <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                App Development
              </h1>
            </div>
          </div>
        </section>

        <section className="min-h-[980px]">
          <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 md:px-10 lg:gap-40 lg:py-24">
            <div className="flex justify-end">
              <article className="w-full max-w-xl bg-[#3f68a3] p-8 text-center text-white shadow-[0_14px_24px_rgba(15,23,42,0.2)] md:p-10">
                <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                  Transforming dreams into digital masterpieces: Building apps
                  that inspire and innovate at every touch
                </h2>
                <p className="mt-6 text-sm leading-7 text-blue-100 md:text-base">
                  Chordz Technologies is one of the most trusted and innovative
                  mobile app and web development companies in Pune. Our expert
                  team specializes in native and cross-platform solutions that
                  empower businesses to grow digitally.
                </p>
              </article>
            </div>

            <div className="flex justify-start">
              <article className="w-full max-w-lg bg-white p-8 shadow-[0_18px_30px_rgba(15,23,42,0.18)] md:p-10">
                <h3 className="text-5xl font-extrabold text-slate-900 md:text-6xl">
                  Our Tag Line
                </h3>
                <div className="mt-5 h-1.5 w-20 bg-orange-500" />
                <p className="mt-8 text-base leading-9 text-slate-600 md:text-lg">
                  As a relationship-driven web company, we always have the
                  client and their needs at the front of our minds. We
                  don&apos;t make promises we can&apos;t keep and why would we
                  want to. Our web design services will take you and your
                  business to the next level, ensuring success online.
                  Empowering your online presence with expert website
                  development.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
