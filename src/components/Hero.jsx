export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-blue-950 text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          From Vision To{" "}
          <span className="text-red-500">Execution</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          We transform your ideas into reality with cutting-edge technology
          and innovative digital solutions.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">

          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg">
            Get Started 🚀
          </button>

          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition">
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}