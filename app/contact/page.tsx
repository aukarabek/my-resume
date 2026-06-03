"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    await fetch("https://ft3cleuorh.execute-api.us-east-1.amazonaws.com/prod/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="mt-20 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <Image
          src="/my-image.jpg"
          alt="Karabek"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-gray-200 shadow-md"
        />
      </div>

      <p className="text-gray-600 mb-6">
        Feel free to reach out for collaboration or opportunities.
      </p>

      {/* Contact Info */}
      <div className="space-y-2 mb-10">
        <p>Email: aukarabek@gmail.com</p>

        <p>Phone: 312-646-9974</p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/karabek-au-2021/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/karabek-au-2021
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-3 text-left">
        <input
          className="w-full border p-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border p-2"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border p-2"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 mt-2">
            Message sent successfully ✔️
          </p>
        )}
      </form>
    </section>
  );
}