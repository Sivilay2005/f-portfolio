'use client';
import React from 'react';

function ProjectPage() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-gray-800">
      {/* 🔵 พื้นหลังเบลอ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[6px]" />

      {/* 🔵 เนื้อหา */}
      <div className="container relative z-10 max-w-5xl h-full mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-10">🚀 Projects</h1>

        {/* คำอธิบายเกี่ยวกับตัวเอง */}
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          I am currently focusing on developing my full-stack web development skills and will be adding personal projects here soon. 
          I enjoy working with technologies like React.js, Next.js, Node.js, and Express.js, and I’m excited to build projects that 
          combine creativity and problem-solving. Stay tuned!
        </p>

        {/* กล่องโปรเจกต์ตัวอย่าง */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white/10 backdrop-blur-md border-l-4 border-blue-500 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
              <p className="text-gray-100">
                A personal project is on the way — combining tech skills, creativity, and real-world problem solving.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
