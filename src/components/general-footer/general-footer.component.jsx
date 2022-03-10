import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import './general-footer.styles.scss';

import Logo from '../../assets/svg/logo-redondo-amarillo.svg';

const imgStyleRadius = 'border-radius: 10px; display: none;'

const GeneralFooter = () => {
    return (
        <section className='general-footer'>
            <StaticImage 
                src='../../assets/images/mexico_marino-bottom_cta-desktop-img.jpg' 
                alt='test' imgClassName='cta-image' imgStyle={imgStyleRadius}
            />

            <div>
                <nav className='footer-menu'>
                    <Link to='/' className='footer-logo-section'>
                        <Logo className='footer-logo'/>
                    </Link>
                    <div className='footer-menu-section'>
                        <div><b>Buscador</b></div>
                        <Link to='/' className='nav-link'><div>Lanchas</div></Link>
                        <Link to='/' className='nav-link'><div>Veleros</div></Link>
                        <Link to='/' className='nav-link'><div>Motos</div></Link>
                        <Link to='/' className='nav-link'><div>Yates</div></Link>
                    </div>
                    <div className='footer-menu-section'>
                        <div><b>Menu</b></div>
                        <a href='https://mexicomarino.com/clima/informacion' className='nav-link'><div>Clima</div></a>
                        <Link to='/'className='nav-link'><div>Distribudores</div></Link>
                        <Link to='/'className='nav-link'><div>Servicios</div></Link>
                    </div>
                    <div className='footer-menu-section'>
                        <div><b>Social</b></div>
                        <a href='https://mexicomarino.com/contacto' className='nav-link'><div>Contacto</div></a>
                    </div>
                </nav>
            </div>
            <div className='footer-reserve'>
                <div>Desarrollado por 
                    <a href='https://www.deep-blue.io' className='nav-link'>
                        <spam> Deep Blue </spam>
                    </a>
                </div>
                <div>® Derechos reservados, 2022</div>
                <div>Aviso de privacidad</div>
            </div>
        </section>
    )
};

export default GeneralFooter;