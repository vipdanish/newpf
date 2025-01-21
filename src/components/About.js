import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col items-center">
          <img src="favicon.ico" alt="Hacker Mask" className="w-32 h-32 mb-4" />
          <p className="text-lg text-center">
            I am a passionate hacker with a focus on security and cloud architecture. My journey in tech has been driven by curiosity and a desire to solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
