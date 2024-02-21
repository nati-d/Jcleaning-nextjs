// components/SEO.js

import Head from "next/head";
import {thumbnail} from '/thumbnail.webp'

const SEO = ({ title, description, url }) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Business",
    name: "J Cleaning Solutions",
    description: description,
    url: url,
    image: ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7603 Finns Ln Lanham, MD 207006-1219 ",
      addressCountry: "United states",
    },
    telephone: "571-977-0161",
    telephoneTwo: "571-458-9983",
    openingHours: "24 Hours",
    priceRange: "$$",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={thumbnail} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={thumbnail} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <meta
        name="keywords"
        content="house cleaning, residential cleaning, apartment cleaning, home cleaning services, carpet cleaning, window cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, office cleaning, business cleaning, commercial cleaning services, weekly cleaning, bi-weekly cleaning, monthly cleaning, one-time cleaning, local cleaning services, eco-friendly cleaning, green cleaning services, environmentally friendly cleaning, pre-event cleaning, post-event cleaning, party cleanup, refrigerator cleaning, oven cleaning, dishwasher cleaning, kitchen cleaning, bathroom cleaning, bedroom cleaning, living room cleaning, emergency cleaning services, same-day cleaning, decluttering services, organization and cleaning, pet-safe cleaning, pet-friendly cleaning services, senior living cleaning, elderly-friendly cleaning, personalized cleaning services, tailored cleaning plans, professional cleaning services, top-rated cleaning company, experienced cleaners"
      />
      <html lang="en" />
    </Head>
  );
};

export default SEO;
