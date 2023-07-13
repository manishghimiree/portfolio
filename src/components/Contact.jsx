import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex">
          <form
            action="https://getform.io/f/f0b387f1-6a02-44aa-bb3b-27fcb4f844aa"
            method="POST"
            className="flex flex-col w-full md:w-1/2 mr-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl mr-2" />
              <p>9861203978</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-xl mr-2" />
              <p>manishghimire633@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl mr-2" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
