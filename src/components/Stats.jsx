import { Users, Briefcase } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6 md:px-16 text-center">

      {/* HEADING */}
      <h2 className="text-4xl font-bold">
        Why Choose <span className="text-red-400">Us?</span>
      </h2>

      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        We deliver innovative solutions with excellence and help businesses grow
        using modern technology and AI.
      </p>

      {/* STATS CARDS */}
      <div className="flex justify-center gap-10 mt-12 flex-wrap">

        {/* CARD 1 */}
        <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-lg w-44 hover:scale-105 transition">
          <Users className="mx-auto text-red-500" size={30} />
          <h3 className="text-3xl font-bold mt-4">113+</h3>
          <p className="text-sm mt-2">Happy Clients</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-lg w-44 hover:scale-105 transition">
          <Briefcase className="mx-auto text-red-500" size={30} />
          <h3 className="text-3xl font-bold mt-4">162+</h3>
          <p className="text-sm mt-2">Projects Done</p>
        </div>

      </div>

      {/* LOGO SCROLL SECTION */}
      <div className="mt-16 overflow-hidden">

        <p className="text-gray-300 mb-6">
          Trusted by 113+ Valued Clients
        </p>

        <div className="relative w-full overflow-hidden">

          <div className="flex gap-12 animate-scroll whitespace-nowrap items-center">

            {/* LOGOS */}
            <img src="/logos/logo1.webp" className="h-10 object-contain" />
            <img src="/logos/logo2.webp" className="h-10 object-contain" />
            <img src="/logos/logo3.webp" className="h-10 object-contain" />
            <img src="/logos/logo4.webp" className="h-10 object-contain" />
            <img src="/logos/logo5.webp" className="h-10 object-contain" />

            {/* DUPLICATE FOR SMOOTH LOOP */}
            <img src="/logos/logo1.webp" className="h-10 object-contain" />
            <img src="/logos/logo2.webp" className="h-10 object-contain" />
            <img src="/logos/logo3.webp" className="h-10 object-contain" />
            <img src="/logos/logo4.webp" className="h-10 object-contain" />
            <img src="/logos/logo5.webp" className="h-10 object-contain" />

          </div>

        </div>

      </div>

    </section>
  );
}