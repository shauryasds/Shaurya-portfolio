import Head from 'next/head';
import { MeteorsDemo } from '@/components/meteorsCard';

const projects = [
  
  {
    title: 'Weather App',
    description: 'A full-stack weather application that fetches real-time weather data.',
    link: 'https://github.com/shauryasds/weather-app',
    tech: 'React, Redux, API',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills.',
    link: 'https://github.com/shauryasds/portfolio',
    tech: 'Next.js, Tailwind CSS',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application using WebSocket.',
    link: 'https://github.com/shauryasds/chat-app',
    tech: 'Node.js, Socket.io',
  },
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with payment integration.',
    link: 'https://github.com/shauryasds/e-commerce',
    tech: 'Next.js, MongoDB, Stripe',
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 bg-black text-white p-8">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Showcasing my projects as a Full Stack Web Developer." />
      </Head>

      <div className="max-w-[60vw] mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <MeteorsDemo heading={project.title} data={project.description} link={project.link} tech={project.tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;