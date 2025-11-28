"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [dark, setDark] = useState(true);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 bg-gray-900 dark:bg-gray-900 text-white shadow-sm py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Your Name</h1>
        <div className="flex gap-6 text-lg">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-gray-400"
          >
            My Story
          </button>
          <button onClick={handleContactClick} className="hover:text-gray-400">
            Contact
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded hover:bg-gray-700"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col flex-1 justify-center items-center text-center min-h-screen px-6">
        <h2 className="text-5xl font-bold mb-6">I build awesome web experiences.</h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          I'm a frontend engineer who loves creating interactive, polished, and high-performance web apps.
        </p>

        {/* Center Buttons */}
        <div className="flex gap-8">
          <Link
            href="/my-story"
            className="px-12 py-6 text-2xl font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            My Story
          </Link>

          <Link
            href="/projects"
            className="px-12 py-6 text-2xl font-bold bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Projects
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        ref={contactRef}
        className={`w-full py-16 px-6 transition-all -mt-20 ${dark ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <div className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          <h3 className="text-3xl font-semibold mb-4 text-center">Contact Me</h3>
          <p className="text-center mb-6">
            Email: <span className="underline">youremail@example.com</span> | Phone: <span className="underline">+1234567890</span>
          </p>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`p-3 rounded border ${dark ? "border-gray-600 bg-gray-900 text-white" : "border-gray-300 bg-gray-100 text-black"
                }`}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`p-3 rounded border ${dark ? "border-gray-600 bg-gray-900 text-white" : "border-gray-300 bg-gray-100 text-black"
                }`}
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className={`p-3 rounded border ${dark ? "border-gray-600 bg-gray-900 text-white" : "border-gray-300 bg-gray-100 text-black"
                }`}
              required
            ></textarea>
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg transition ${dark ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-400 text-white hover:bg-blue-500"
                }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
