import React from 'react';
import { BackgroundGradientDemo } from '@/components/colorCard';
import { FaReact, FaNodeJs, FaDocker, FaCodeBranch, FaServer } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: "React", data: "reactjs", icon: <FaReact /> },
    { name: "Node.js", data: "nodejs", icon: <FaNodeJs /> },
    { name: "Express", data: "expressjs", icon: <SiExpress /> },
    { name: "MongoDB", data: "mongodb", icon: <SiMongodb /> },
    { name: "TypeScript", data: "typescript", icon: <SiTypescript /> },
    { name: "Next.js", data: "nextjs", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", data: "tailwindcss", icon: <SiTailwindcss /> },
    { name: "GraphQL", data: "graphql", icon: <FaServer /> },
    { name: "Redux", data: "redux", icon: <FaCodeBranch /> },
    { name: "Docker", data: "docker", icon: <FaDocker /> },
  ];

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl   font-bold mb-6">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-blue-900 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <BackgroundGradientDemo name={skill.name} data={skill.data} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;