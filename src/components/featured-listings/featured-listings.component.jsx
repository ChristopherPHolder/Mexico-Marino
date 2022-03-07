import React from 'react';

import './featured-listings.styles.scss';

import {listings} from './featured-listings.data.jsx'

const FeaturedListings = () => {
  return (
    
    <section className='featured-listing-section'>
      <h3 className='featured-listing-title'>DESTACADOS</h3>
      <div className='featured-listings'>
        {listings.map((listing) => {
          return (
            <article className='listing-card' id={listing.id}>
              <div className='card-image'>
                Image
              </div>
              <div className='card-details'>
                <spam>Price</spam>
                <spam>{listing.year}</spam> | <spam>TYPE</spam>
                <br/>
                <spam>Details</spam>
              </div>
            </article>
            )
          })}
      </div>
    </section>
  )
};

export default FeaturedListings;