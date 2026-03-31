import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What services does your company provide?",
      a: "We offer web development, mobile apps, AI solutions, SEO, and digital marketing."
    },
    {
      q: "Is technical support included?",
      a: "Yes, we provide full technical support for all our projects."
    },
    {
      q: "Do you work with startups?",
      a: "Yes, we work with startups, SMEs, and enterprises."
    },
    {
      q: "Can solutions be customized?",
      a: "Absolutely, all our solutions are tailored to your needs."
    }
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      
      <h2 className="text-4xl font-bold text-center text-blue-900">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Get clarity about our services.
      </p>

      <div className="max-w-3xl mx-auto mt-10 space-y-4">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer"
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{item.q}</h3>
              <span className="text-blue-700">
                {active === index ? "-" : "+"}
              </span>
            </div>

            {active === index && (
              <p className="mt-3 text-gray-600">{item.a}</p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}