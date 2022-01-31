import React from 'react';
import About from '../components/About';
import SEO from '../components/SEO';

const IndexPage = () => {
  return (
    <section>
      <SEO title="Sanji Pun | Frontend Engineer" />
      <div className="max-w-8xl w-full mx-auto px-10">
        <h1 className="text-3xl text-red-500">Hello world!</h1>
      </div>
      <About />
    </section>
  );
};

export default IndexPage;
