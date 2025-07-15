'use client';
import React from 'react';
import {
  Code,
  Server,
  Database,
  Users,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';

const hardSkills = [
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    title: 'React.js',
    level: 'Intermediate',
    description: 'Building responsive UIs with reusable components.',
  },
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    title: 'Next.js',
    level: 'Intermediate',
    description: 'Modern frontend framework with SSR and routing.',
  },
  {
    icon: <Server className="w-6 h-6 text-blue-400" />,
    title: 'Node.js & Express.js',
    level: 'Intermediate',
    description: 'Creating backend APIs and server-side logic.',
  },
  {
    icon: <Database className="w-6 h-6 text-blue-400" />,
    title: 'SQLite',
    level: 'Beginner',
    description: 'Simple and lightweight relational database handling.',
  },
];

const softSkills = [
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    title: 'Teamwork',
    description: 'Collaborated on group projects and shared responsibilities.',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-green-400" />,
    title: 'Communication',
    description: 'Delivered public speeches and engaged with diverse groups.',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-green-400" />,
    title: 'Problem Solving',
    description: 'Quickly learned and adapted to solve real-world challenges.',
  },
];

const SkillsPage = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-gray-700">
      {/* 🔵 พื้นหลังเบลอ */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-60 backdrop-blur-[6px]" />
      
      <div className="container relative z-10 max-w-5xl h-full mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-10">
          💡 My Skills
        </h1>

        {/* คำอธิบายเกี่ยวกับตัวเอง */}
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          I'm a second-year ICT Engineering student with hands-on experience in full-stack web development. I enjoy using technology to solve real-world problems and have grown both technically and personally through training, teamwork, and public engagement.
        </p>

        {/* Hard Skills */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">💻 Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {hardSkills.map((skill, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-sm text-blue-300 mb-1">Level: {skill.level}</p>
              <p className="text-gray-100 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="text-2xl font-semibold mb-4 text-green-300">🧠 Soft Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-100 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
