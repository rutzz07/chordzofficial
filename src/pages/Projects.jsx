import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Recent Projects Slider Data
  const recentProjects = [
    {
      img: "/kilbil.webp",
      link: "https://example1.com",
    },
    {
      img: "/lic.webp",
      link: "https://example2.com",
    },
    {
      img: "/arnavfinance.webp",
      link: "https://example3.com",
    },
    {
      img: "/MeetMyartist.webp",
      link: "https://example4.com",
    },
    {
      img: "/shetii.webp",
      link: "https://example5.com",
    },
    {
      img: "/saira.webp",
      link: "https://example6.com",
    },
     {
      img: "/mazenbricks.webp",
      link: "https://example6.com",
    },
        {
      img: "/beatsaceadmy.webp",
      link: "https://example6.com",
    },
        {
      img: "/shreevithalhospital.webp",
      link: "https://example6.com",
    },
  ];

  // 🔹 Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === recentProjects.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 AI Projects Data
  const projects = [
    {
      title: "Product Box Labels Processing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      desc: "AI system for high-accuracy real-time product label validation.",
      overview:
        "Our Product Box Labels Processing system is an advanced AI solution that performs real-time validation of product labels using computer vision.",
      features: [
        "Real-time label detection",
        "Multi-language text recognition",
        "Barcode & QR verification",
        "Automated quality scoring",
      ],
      tech: ["TensorFlow", "OpenCV", "Python", "Docker"],
    },
    {
      title: "Face Recognition Attendance System",
      image: "https://images.unsplash.com/photo-1581091870627-3a89b9c6b5c3",
      desc: "AI-powered facial recognition attendance system.",
      overview:
        "Automates attendance using face recognition with real-time tracking and logging.",
      features: [
        "Live face detection",
        "Face match database",
        "Auto check-in/out",
        "Logs dashboard",
      ],
      tech: ["Python", "OpenCV", "Keras", "Django"],
    },
    {
      title: "Smart Invoice Extraction System",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      desc: "Extracts and processes invoice data using AI.",
      overview:
        "Extracts invoice data using OCR and ML to reduce manual work.",
      features: [
        "OCR extraction",
        "Field classification",
        "Confidence scoring",
        "Export to Excel/CSV",
      ],
      tech: ["Tesseract", "Python", "Flask", "Docker"],
    },
    {
      title: "Traffic Object Detection AI",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      desc: "Detects vehicles and pedestrians in real-time.",
      overview:
        "AI system for traffic monitoring using YOLO-based object detection.",
      features: [
        "Real-time detection",
        "Vehicle tracking",
        "Signal violation alerts",
        "Live stream analysis",
      ],
      tech: ["YOLOv8", "Python", "TensorFlow", "OpenCV"],
    },
  ];

  return (
    <>
      <main className="bg-[#ececec]">

        {/* HERO */}
        <section className="bg-[#05046a] text-white py-20">
          <h1 className="text-center text-4xl font-bold">Our Projects</h1>
        </section>

        {/* 🔥 RECENT PROJECTS SLIDER */}
        <section className="bg-[#0b2c6b] py-10 text-white text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Recent Projects</h2>

          <div className="mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg cursor-pointer">

            <a
              href={recentProjects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={recentProjects[currentIndex].img}
                alt="Project"
                className="w-full h-[300px] object-cover transition-all duration-500"
              />
            </a>

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {recentProjects.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </section>

        {/* AI PROJECTS */}
        <section className="py-14 px-6">
          <h2 className="text-center text-3xl font-bold mb-10">
            Our AI/ML Projects
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {projects.map((proj, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">

                <img src={proj.image} className="h-40 w-full object-cover" />

                <div className="p-4">
                  <h3 className="font-semibold">{proj.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{proj.desc}</p>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="mt-4 bg-blue-900 text-white px-4 py-2 rounded"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl p-8 max-w-xl w-full">

              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedProject.title}
              </h2>

              <h3 className="font-semibold mt-4">Project Overview</h3>
              <p className="text-gray-600 mt-2">
                {selectedProject.overview}
              </p>

              <h3 className="font-semibold mt-4">Key Features</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {selectedProject.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h3 className="font-semibold mt-4">Technologies Used</h3>
              <div className="flex gap-2 flex-wrap mt-2">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 bg-blue-900 text-white px-6 py-2 rounded block mx-auto"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}