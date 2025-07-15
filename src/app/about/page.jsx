'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-gray-900">
      {/* 🔵 พื้นหลังเบลอและทึบ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[6px]" />

      {/* 🔵 เนื้อหา */}
      <div className="container relative z-10 max-w-4xl mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-10">
          👩🏻‍💻 About Me
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <p className="text-lg text-gray-200 leading-relaxed">
            Hello! I'm <span className="text-blue-300 font-semibold">Sivilay SYBOUNHEUANG</span>, 
            a passionate second-year student majoring in Information and Communication Technology Engineering 
            at the Institute of Information and Communication Technology.
            <br /><br />
            I have a strong interest in full-stack web development and recently completed a hands-on 
            Full Stack Development training program where I worked with technologies like 
            <span className="text-blue-400"> React.js</span>, <span className="text-blue-400">Next.js</span>, 
            <span className="text-blue-400"> Node.js</span>, <span className="text-blue-400">Express.js</span>, 
            and <span className="text-blue-400">SQLite</span>.
            <br /><br />
            As a recipient of the <span className="text-blue-300 font-medium">Yamamoto Foundation Scholarship</span>, 
            I had the honor of speaking on behalf of other students during the 2024 scholarship ceremony.
            I'm also active in social media content creation and group collaboration, 
            and I'm deeply interested in using technology to support sustainable development 
            and the conservation of natural resources.
            <br /><br />
            I believe in continuous learning, effective teamwork, and applying IT for a better future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
