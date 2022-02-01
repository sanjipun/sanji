import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import Skills from '../components/Skills';
import Works from '../components/Works';

const IndexPage = () => {
  return (
    <section>
      <SEO title="Sanji Pun | Frontend Engineer" />
      <div className="max-w-8xl w-full mx-auto px-10 py-32">
        <h1 className="text-3xl text-red-500">Hello world!</h1>
      </div>
      <About />
      <Works />
      <Skills />
      <Contact />
    </section>
  );
};

export default IndexPage;
