import { ArrowRight, Award, Globe2, HeartHandshake, Quote } from "lucide-react";
import Footer from "../components/Footer";
import heroImage from "../assets/hero.png";

const responsibilities = [
  {
    title: "To Our Society",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    text:
      "We ensure that everyone we interact with feels welcome, safe, and informed. We respect and value people including our employees, customers, and partners.",
  },
  {
    title: "To Our Planet",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=900&q=80",
    text:
      "Sustainability is a part of everything we do. Close collaboration with our stakeholders helps us build a better tomorrow.",
  },
  {
    title: "To Our Neighbors",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    text:
      "When we say we put people first, we mean all people. In addition to our employees and customers, we consider the communities we serve in all that we do.",
  },
];

const testimonials = [
  {
    quote:
      "These guys are incredible. They helped us grow our business and now the biggest problem we seem to come across is having too much business.",
    name: "Manoj Kohale",
    role: "Anchor",
  },
  {
    quote:
      "Chordz brought clarity, speed, and real ownership to our digital rollout. The team felt like a genuine technology partner from day one.",
    name: "Priya Deshmukh",
    role: "Operations Lead",
  },
  {
    quote:
      "Their delivery was sharp, collaborative, and thoughtful. We were able to launch faster without compromising quality or communication.",
    name: "Rahul Jadhav",
    role: "Founder",
  },
];

export default function About() {
  return (
    <>
      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-sky-200/20" />

          <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 md:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Empowering a Greener Future with{" "}
                <span className="text-blue-900 md:text-blue-950">Chordz</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-100 md:text-xl">
                We empower clients with world-class technology products,
                services, and solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="h-48 rounded-2xl bg-[#0f0128] shadow-[0_18px_40px_rgba(15,1,40,0.3)] md:h-64" />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                You should know <span className="text-indigo-700">about us!</span>
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-700">
                <p>
                  <span className="font-bold text-indigo-700">
                    Chordz Technologies
                  </span>{" "}
                  is a pioneer in mobile application development with a unique blend
                  of Agile-centric development and user-centered design. Since 2023,
                  we&apos;ve empowered entrepreneurs and startups across India with
                  high-acceptance mobile interfaces.
                </p>
                <p>
                  We also offer powerful digital marketing services, helping
                  businesses reach customers faster and smarter.
                </p>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Our Core Values
                  </h3>
                  <p className="mt-3">
                    We align our goals through core values:{" "}
                    <span className="font-semibold">
                      Loyalty, Honesty, Trust, Ingenuity, Accountability,
                      Simplicity, Respect, and Value-centricity.
                    </span>{" "}
                    At Chordz, we believe every great product is a blend of
                    technology and design, science and art.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6 shadow-xl ring-1 ring-slate-200">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-lg sm:col-span-2">
                  <Award className="h-10 w-10 text-amber-400" />
                  <p className="mt-5 text-lg font-bold">
                    Trusted by growing brands and institutions
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    We build reliable digital products with a strong focus on
                    usability, execution, and long-term value.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
                  <Globe2 className="h-8 w-8 text-blue-700" />
                  <p className="mt-4 font-bold text-slate-950">India-first impact</p>
                  <p className="mt-2 text-sm text-slate-600">
                    We support founders, startups, and teams with scalable
                    digital systems.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
                  <HeartHandshake className="h-8 w-8 text-blue-700" />
                  <p className="mt-4 font-bold text-slate-950">People-centered work</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Clear communication and thoughtful delivery stay at the
                    center of every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#dfe7f1_0%,#edf3f9_100%)] py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="overflow-hidden rounded-[28px] border border-slate-300 bg-slate-500 p-4 shadow-2xl">
              {/* <div className="rounded-[22px] border-[10px] border-amber-300 bg-[linear-gradient(135deg,#f4b458_0%,#ff8f54_100%)] p-4">
                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80"
                    alt="Team recognition ceremony"
                    className="h-full min-h-[280px] w-full rounded-2xl object-cover"
                  />
                  <div className="grid gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                      alt="Award recipients"
                      className="h-40 w-full rounded-2xl object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80"
                      alt="Event stage"
                      className="h-40 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="-mt-10 mx-auto max-w-3xl rounded-2xl bg-[#ffd260] px-6 py-5 text-center shadow-2xl">
                  <p className="text-2xl font-extrabold text-slate-950 md:text-4xl">
                    विज्ञान-तंत्रज्ञान क्षेत्रातील विशेष योगदानाबद्दल
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-900 md:text-2xl">
                    Chordz Technologies ला सन्मानित करण्यात आले.
                  </p>
                </div>
              </div> */}
              <div><img src="./aboutpage.jpeg" alt="" /></div>
            </div>

            <div className="mt-10 max-w-5xl">
              <h2 className="text-3xl font-extrabold text-indigo-950 md:text-5xl">
                Chordz Technologies Honored with special contribution award
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                We are thrilled to announce that Chordz Technologies has been
                honored with the <span className="font-bold">Special Contribution in Information Technology Services Award</span> by the esteemed Parbhani Foundation.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                This recognition serves as a testament to our commitment to
                innovation, excellence, and the transformative power of
                technology. We thank our team, clients, and the Parbhani
                Foundation for this honor.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b2a67] py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-extrabold md:text-5xl">
              Our Responsibilities
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {responsibilities.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-sm bg-white text-slate-900 shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 md:text-5xl">
                What Say Our Clients ??
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                We leverage technology to solve problems and deliver innovative
                solutions that our customers love. This provides our employees
                opportunities for learning, growth, and collaboration with
                diverse and high-profile clients. We are always looking for
                talented thought leaders who are ready to join us in creating
                smiles.
              </p>
              <a
                href="/career"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:gap-3"
              >
                View Careers at Chordz <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-sm bg-slate-50 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
              <Quote className="h-8 w-8 text-indigo-900" />
              <p className="mt-8 min-h-[140px] text-lg leading-8 text-slate-700">
                {testimonials[0].quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                  MK
                </div>
                <div>
                  <p className="font-semibold text-slate-950">
                    {testimonials[0].name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonials[0].role}</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                {testimonials.map((item, index) => (
                  <span
                    key={item.name}
                    className={`h-1.5 w-8 rounded-full ${
                      index === 0 ? "bg-indigo-700" : "bg-slate-900"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
