import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
     
      <div className="max-w-screen-lg">
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked on</p>
        </div>
        <div>
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience