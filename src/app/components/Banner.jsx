import React from "react";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      {/* พื้นหลังเบลอสีดำโปร่งแสง */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-[6px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-8 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Sivilay SYBOUNHEUANG
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold mb-6">
          ICT Engineering Student • Future Full Stack Developer
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Passionate about building technology that empowers people and sustains the planet.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded shadow border-2 border-white hover:bg-transparent hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Banner;
