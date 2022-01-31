import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return <Helmet title={title}></Helmet>;
};

export default SEO;
