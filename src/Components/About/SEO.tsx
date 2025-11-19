// src/components/SEO.tsx
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, name = "MarketGod Academy", type = "website", imageUrl }) => {
  const fullTitle = `${title} | MarketGod Academy`;
  
  return (
    <>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {/* End Facebook tags */}
    </>
  );
};

export default SEO;