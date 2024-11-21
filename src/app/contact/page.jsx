import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-black p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 w-full max-w-lg">
        <h2 className="text-4xl font-semibold mb-4 text-center text-white">Contact Me</h2>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-blue-400 mr-3 text-2xl" />
          <p className="text-lg text-gray-300">
            <a href="mailto:shauryadeep589@gmail.com" className="text-center hover:underline">shauryadeep589@gmail.com</a>
          </p>
        </div>
        
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-900"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;