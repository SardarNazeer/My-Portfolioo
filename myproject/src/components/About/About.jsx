import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side  */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting */}
          <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sardar Nazeer
          </h2>

          {/* skill heading with typing effect  */}
         <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
  <span className="text-white">I am a </span>
  <TypeAnimation
    sequence={[
      "Full Stack Developer", 2000,
      "Frontend Developer", 2000,
      "Software Engineer", 2000,
      "UI/UX Designer", 2000,
      "Coder", 2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-[#8245ec]"
  />
</h3>
          {/* about me  */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a Full Stack Developer passionate about building modern,
            responsive, and user-friendly web applications. I enjoy solving
            real-world problems through clean code and continuously learning new
            technologies. My goal is to create efficient, scalable, and visually
            appealing digital experiences while growing as a software engineer.
          </p>
          {/* button resume  */}
          <a href="" target="_blank" 
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold
          transition duration-300 transform scale 105"
          style={{
            background: "linear-gradient(90deg, #8245ec, #a855f7)",
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}>
            Download CV
          </a>
        </div>
        {/* right side */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt 
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4
         border-purple-700 rounded-full"
                 titleMaxAngleX={20}
        titleMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
         />

        <img src={profileImage} alt="Sardar_Nazeer" 
        className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(138,69,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default About;
