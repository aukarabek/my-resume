import Image from "next/image";

export default function Projects() {
  return (
    <section className="mt-20 px-4 max-w-4xl mx-auto">

      {/* Image */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/sre-image.jpg"
          alt="Projects Banner"
          width={1000}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-600">
            A full-stack web application built with modern technologies.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-600">
            Scalable backend system with cloud integration.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-600">
            Kubernetes deployment with Terraform.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Four</h3>
          <p className="text-gray-600">
            Identity Providers (IdP) implementation along with Single Sign On (SSO).
          </p>
        </div>

      </div>
    </section>
  );
}