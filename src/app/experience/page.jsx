"use client";
import React from "react";

const Experiences = [
  {
    title: "Full Stack Development Training – AKCF",
    time: "2024",
    description:
      "Completed intensive training in React.js, Next.js, Node.js, Express.js, and SQLite. Gained practical experience through real-world projects and teamwork.",
  },
  {
    title: "Yamamoto Foundation Scholarship Recipient",
    time: "2024 – 2026",
    description:
      "Awarded a prestigious scholarship for two consecutive years. Delivered a speech at the 2024 award ceremony as a student representative.",
  },
  {
    title: "Social Media & Group Activities",
    time: "Ongoing",
    description:
      "Collaborated with peers in content creation and social media management for group platforms. Strengthened communication and coordination skills.",
  },
];

const ExperiencePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🔵 พื้นหลังรูป + เบลอ */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4046791/pexels-photo-4046791.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Bg.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[6px]" />
      </div>

      {/* 🔵 เนื้อหา */}
      <section className="relative z-10 max-w-5xl mx-auto py-16 px-6 text-white">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-12 drop-shadow">
          💼 My Experience
        </h1>

        <div className="space-y-8">
          {Experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border-l-4 border-blue-500 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-1">
                {exp.title}
              </h2>
              <p className="text-sm text-blue-300 mb-2 font-medium">
                {exp.time}
              </p>
              <p className="text-gray-100">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
