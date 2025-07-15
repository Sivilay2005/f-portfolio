'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Facebook, Phone } from 'lucide-react'; 

const contactPage = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-gray-900">
      {/* พื้นหลังเบลอสีดำ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[6px]" />

      <div className="container relative z-10 max-w-3xl mx-auto px-6 py-12 text-white text-center">
        <h1 className="text-4xl font-bold text-blue-200 mb-8">📬 Contact Me</h1>
        <p className="text-lg text-gray-300 mb-10">
          Feel free to reach out or connect with me through the platforms below.
        </p>

        {/* ปุ่มโซเชียลมีเดีย */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* GitHub */}
          <Link href="https://github.com/Sivilay2005" target="_blank">
            <button className="flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition">
              <Github className="w-5 h-5" />
              GitHub
            </button>
          </Link>

          {/* Facebook */}
          <Link href="https://www.facebook.com/share/1Eu89NfdVg/?mibextid=wwXIfr" target="_blank">
            <button className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
          </Link>

          {/* WhatsApp */}
          <Link href="https://wa.me/8562058769118" target="_blank">
            <button className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition">
              <Phone className="w-5 h-5" />
              WhatsApp
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default contactPage;