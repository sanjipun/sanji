import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-black text-white">
      <div className="max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-20 w-full mx-auto px-10 py-44">
        <div className="flex flex-col items-start">
          <h1>02</h1>About Me
        </div>
        <div className="grid grid-cols-1 gap-10">
          <p>
            I am Frontend Developer with 1 year+ experience in React JS. I can convert wireframes
            into flawless responsive Websites using JavaScript as well as TypeScript.
          </p>
          <h1>6 Months+ experience in web3.</h1>
          <h1>Learning Blockchain and Solidity.</h1>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="about.png" alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
