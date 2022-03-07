import React from 'react';

import HeroBanner from '../components/hero-banner/hero-banner.component';
import FeaturedListings from '../components/featured-listings/featured-listings.component';

import Layout from '../components/layout/layout.component';
import FooterBanner from '../components/footer-banner/footer-banner.component';

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturedListings />
      <FooterBanner />
    </Layout>
  )
}

export default Home;