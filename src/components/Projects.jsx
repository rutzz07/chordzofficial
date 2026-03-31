export default function Projects() {
  const projects = [
    {
      title: "Thesaira",
      img: "/projects/p1.webp",
    },
    {
      title: "Hospital Website",
      img: "/projects/p2.webp",
    },
    {
      title: "Modern Portfolio",
      img: "/projects/p3.webp",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-16 text-center">

      <h2 className="text-4xl font-bold text-blue-900">
        Explore Our <span className="text-red-500">Projects</span>
      </h2>

      <p className="text-gray-600 mt-4">
        A showcase of our latest work and success stories.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-12">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
          >

            {/* IMAGE */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <button className="mt-4 px-4 py-2 bg-red-500 rounded-lg">
                View Project
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}