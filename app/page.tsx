import Hero from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* ✅ Hero replaces your current top section */}
      <Hero />

      {/* ✅ Your existing content starts here */}
      <section className="text-center py-24 px-4">

        <h2 className="text-5xl font-bold tracking-tight mb-6">
          Building modern web experiences
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          I’m a DevOps Engineer/full-stack developer specializing in scalable applications,
          clean UI design, and cloud-native architectures.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-2 rounded-xl bg-orange-400 text-white hover:bg-green-700 transition">
            DevOps Stack
          </button>

          <button className="px-6 py-2 rounded-xl bg-orange-400 text-white hover:bg-green-700 transition">
            AI Content
          </button>
        </div>

        {/* Divider */}
        <div className="mt-16 w-1/2 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      </section>

      {/* Why section */}
      <section className="py-20 text-center max-w-2xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">
          Why should someone care what I actually do?
        </h3>

        <p className="text-gray-600 leading-relaxed">
          I design and build scalable full-stack applications, automate infrastructure,
          and deploy cloud-native systems using modern DevOps practices.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/devops-image.jfif"
            alt="DevOps illustration"
            width={700}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

      </section>

      {/* Tools section */}
      <section className="py-20 text-center px-4">
        <h3 className="text-2xl font-semibold mb-6">
          Tools that were used for this website
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            Next.js
          </span>

          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            AWS
          </span>

          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            Lambda
          </span>

          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            API Gateway
          </span>

          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            GitHub Actions
          </span>

          <span className="px-4 py-2 border border-amber-600 rounded-lg bg-stone-700/60 text-amber-100 backdrop-blur-sm">
            Tailwind CSS
          </span>
        </div>
      </section>

    </main>
  );
}