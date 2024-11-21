const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Shaurya Deep Shukla</h2>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              LinkedIn
            </a>
            <a href="https://leetcode.com/shauryadeep" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              LeetCode
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}  All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-sm">
            Designed with love by Shaurya Deep Shukla.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;