import { Code, Smartphone, Brain, Search, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern responsive websites with best UI/UX.",
      icon: <Code size={40} />,
    },
    {
      title: "App Development",
      desc: "High-performance mobile apps for Android & iOS.",
      icon: <Smartphone size={40} />,
    },
    {
      title: "AI & ML",
      desc: "Smart automation and AI-powered solutions.",
      icon: <Brain size={40} />,
    },
    {
      title: "SEO",
      desc: "Improve ranking and grow your online presence.",
      icon: <Search size={40} />,
    },
    {
      title: "Digital Marketing",
      desc: "Boost business with modern marketing strategies.",
      icon: <Megaphone size={40} />,
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white px-6 md:px-16 text-center">

      <h2 className="text-4xl font-bold">
        Our <span className="text-red-400">Services</span>
      </h2>

      <p className="text-gray-300 mt-4 max-w-xl mx-auto">
        We provide cutting-edge solutions to help your business grow digitally.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="text-blue-700 flex justify-center mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold">
              {service.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {service.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}