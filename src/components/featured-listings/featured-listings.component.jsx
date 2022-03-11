import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './featured-listings.styles.scss';

import {listings} from './featured-listings.data.jsx';
import GeneralButton from '../general-button/general-button.component';



const FeaturedListings = () => {
  return (
    <section className='featured-listing-section'>
      <h3 className='featured-listing-title'>DESTACADOS</h3>
      <div className='featured-listings'>
        {listings.map((listing) => {
          return (
            <article className='listing-card' id={listing.id}>
              <StaticImage 
                imgClassName='card-image' className='card-image-container'
                aspectRatio={1/1} placeholder="tracedSVG"
                src='../../assets/images/preview-embarcation/thumbnail-mexico_marino-d3d1636c.jpg'
              />
              <div className='card-details'>
                <spam className='listing-price'>{listing.price}</spam><br/>
                <spam>{listing.year}</spam> | <spam>{listing.type}</spam>
                <br/>
                <spam>{listing.info}</spam>
              </div>
              <div className='listing-btn-container'>
                <GeneralButton buttonText='Ver detalles'/>
              </div>
            </article>
            )
          })}
      </div>
    </section>
  )
};

export default FeaturedListings;