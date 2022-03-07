import React from 'react';

import HeroBanner from '../components/hero-banner/hero-banner.component';
import FeaturedListings from '../components/featured-listings/featured-listings.component';

import Layout from '../components/layout/layout.component';

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturedListings />
    </Layout>
  )
}

export default Home;