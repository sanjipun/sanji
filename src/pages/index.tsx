import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import Skills from '../components/Skills';
import Works from '../components/Works';

const IndexPage = () => {
  return (
    <section>
      <SEO title="Sanji Pun | Frontend Developer" />
      <div id="home" className="max-w-8xl w-full mx-auto px-10 py-44">
        <h1 className="text-3xl italic font-extralight text-black text-opacity-50">
          Hello! I'm Sanji Pun
        </h1>
        <h1 className="text-5xl font-black my-10">React / Web3 Developer</h1>
        <p className="text-3xl">Currently working at Royal Protocol</p>
      </div>
      <About />
      <Works />
      <Skills />
      <Contact />
    </section>
  );
};

export default IndexPage;
