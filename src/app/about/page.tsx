import Head from 'next/head';
import { FaGithub, FaLinkedin, FaFileCode, FaEnvelope, FaPhone } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Head>
        <title>About Shaurya Deep Shukla</title>
        <meta name="description" content="Full Stack Web Developer" />
      </Head>

      <div className="max-w-4xl mx-auto pt-32">
        <h1 className="text-6xl font-extrabold text-center mb-6">About Me</h1>
        <p className="text-xl text-center mb-10">
          Hi, I'm <span className="font-semibold">Shaurya Deep Shukla</span>, a passionate Full Stack Web Developer.
        </p>

        <div className="text-center mb-10">
          <p className="text-lg mb-8 leading-relaxed">
            I am a Full Stack Web Developer with expertise in JavaScript, React, Node.js, and more. 
            I love building dynamic and responsive web applications that provide great user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-8 mb-8">
         

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 text-center ">Connect with Me</h2>
            <div className="flex space-x-6 justify-center">
              <a href="https://github.com/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a href="https://leetcode.com/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                <FaFileCode className="mr-2" /> LeetCode
              </a>
              <a href="https://linkedin.com/in/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;