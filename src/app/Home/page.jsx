'use client';
import React from 'react';

const HomePage = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-gray-900">
      {/* 🔵 พื้นหลังเบลอทึบ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[6px]" />

      {/* 🔵 เนื้อหา */}
      <div className="container relative z-10 max-w-4xl mx-auto px-6 py-12 text-white text-center">
        <h1 className="text-5xl font-bold text-blue-200 mb-6 drop-shadow">
          👋 Hi, I’m Sivilay SYBOUNHEUANG
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed">
          I’m a second-year student majoring in Information and Communication Technology Engineering, 
          currently building my skills in full-stack web development with technologies like 
          <span className="text-blue-400"> React.js</span>, <span className="text-blue-400">Next.js</span>, 
          <span className="text-blue-400"> Node.js</span>, <span className="text-blue-400">Express.js</span>, 
          and <span className="text-blue-400">SQLite</span>.
          <br /><br />
          I'm passionate about using technology for positive social and environmental impact. 
          As a recipient of the <span className="text-blue-300 font-medium">Yamamoto Foundation Scholarship</span>, 
          I’ve had the opportunity to grow through both academics and leadership.
          <br /><br />
          I believe in lifelong learning, teamwork, and creating meaningful digital experiences.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium shadow"
          >
            Learn More About Me
          </a>
          <a
            href="/project"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl hover:bg-gray-200 transition font-medium shadow"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
