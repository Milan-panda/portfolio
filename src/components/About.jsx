import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full sm:md:md:h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Self-taught React.js Developer, Passionate about Frontend
          development, I am a Learner with a unique blend of skills and
          interests.{" "}
        </p>
        <br />
        <p className="text-xl">
          I have learned and developer my skills in frontend development
          technology's like HTML5, CSS, JAVASCRIPT (ES6), React js, Tailwind
          CSS, Git & Git hub, BOOTSTRAP etc. through self-learning and online
          resources.
        </p>
        <br />
        <p className="text-xl">
          I am constantly seeking new challenges and opportunities to grow and
          learn, and I believe that I have the necessary skills to contribute to
          a collaborative and dynamic team. Connect with me to learn more about
          my experience and skillset."
        </p>
      </div>
    </div>
  );
};

export default About;
