import React, { useCallback } from "react";

import { StaticImage } from "gatsby-plugin-image";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; 

import './footer-banner.styles.scss';

const FooterBanner = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return (
        <section className="embla">
            <div class="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <a href='https://mexicomarino.com/agencias/detalle/pensol-seminuevos-565'>
                            <StaticImage src='../../assets/images/carousel-footer/mexico_marino-5f518a8a.jpg'/>
                        </a>
                    </div>
                    <div className="embla__slide">
                        <StaticImage src='../../assets/images/carousel-footer/mexico_marino-8bd717fc.jpg'/>
                    </div>
                    <div className="embla__slide">                    
                        <StaticImage src='../../assets/images/carousel-footer/mexico_marino-87d3b9dc.jpg'/>
                    </div>
                </div>
            </div>
            <button class="embla__prev" onClick={scrollPrev}>
                Prev
            </button>
            <button class="embla__next" onClick={scrollNext}>
                Next
            </button>
        </section>
      )
    }

export default FooterBanner;