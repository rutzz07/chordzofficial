export default function ContactCTA() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-16">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold">
            Let's <span className="text-red-400">Build Together</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Have a project in mind? Let’s make it real.
          </p>

          <button className="mt-6 px-6 py-3 bg-red-500 rounded-lg">
            Contact Us →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-60 h-60 bg-white/10 rounded-2xl flex items-center justify-center">
          🤖
        </div>

      </div>

    </section>
  );
}