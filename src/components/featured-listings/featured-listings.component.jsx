import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import StarMarker from '../../assets/svg/starmark.svg';

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
              <div className='card-image-container'>
                <StaticImage 
                  imgClassName='card-image' aspectRatio={1/1} placeholder="tracedSVG"
                  src="https://mexicomarino.com/img/articulo/654/thumbnail-mexico_marino-94fc5cb5.jpg"
                />
                <div className='listing-condition-tag'>
                  {listing.condition}
                </div>
                <div className='heart-svg-container'>
                  <svg className="heart" width="50px" height="50px" viewBox="0 0 60 60">
                    <path class="heart_path" d="M30,21.6c0,0-2.1-4.6-7-4.6c-5.3,0-8.1,4.5-8.1,9.1C15,33.6,30,43,30,43s15-9.3,15-16.9c0-4.6-2.9-9.1-8-9.1 C34,17.1,31.3,18.9,30,21.6L30,21.6z"></path>
                    <path class="heart_fill" d="M30,21.6c0,0-2.1-4.6-7-4.6c-5.3,0-8.1,4.5-8.1,9.1C15,33.6,30,43,30,43s15-9.3,15-16.9c0-4.6-2.9-9.1-8-9.1 C34,17.1,31.3,18.9,30,21.6L30,21.6z"></path>
                  </svg>
                </div>
                <div className='bookmark-svg-container'>
                  <StarMarker className='starmarker-svg' />
                </div>
              </div>

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