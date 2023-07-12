import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {/* <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
          reiciendis eius. Autem, at voluptatibus modi voluptates harum minus
          enim error in consectetur nesciunt assumenda, molestias culpa eveniet?
          Corrupti, atque quidem!
        </p> */}
        <br />
        <p className="text-xl">
          I am a Computer Engineering graduate with a Bachelor's Degree from
          Nepal Engineering College (NEC), affiliated with Pokhara University
          (PU) in Bhaktapur, Nepal. I completed my studies in Computer
          Engineering from 2017 to 2022. During my time at NEC, I gained a solid
          foundation in various aspects of computer science and engineering,
          equipping me with the skills necessary for the field.
        </p>
        <br />
        <p className="text-xl">
          Prior to my Bachelor's Degree, I completed my +2 education with
          distinction (75%) at Reliance International Academy in Chabahil,
          Kathmandu, Nepal, from 2015 to 2017. I excelled academically and
          further developed my passion for technology during this period.
        </p>
        <br />
        <p className="text-xl">
          In 2015, I completed my School Leaving Certificate (SLC) with First
          Division (78.25%) at Arunima Higher Secondary School in Bauddha,
          Kathmandu, Nepal. This laid the groundwork for my educational journey
          and ignited my interest in pursuing a career in computer engineering.
          With my strong educational background and enthusiasm for technology, I
          am driven to contribute to the field of computer engineering and make
          a positive impact. I am constantly seeking opportunities to learn and
          grow, staying up-to-date with the latest advancements in the industry.
          My goal is to leverage my skills and knowledge to solve complex
          problems and create innovative solutions in the world of technology.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About