import React, {useRef} from 'react';
import './footer.css';

const Footer = () => {
    // const titles = gsap.utils.toArray('p')
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Huseyn</h1>
                {/* <div className="text-wrapper">
                    <p className='foot'>Frontender</p>
                    <p className='foot'>UI Designer</p>
                    <p className='foot'>Photographer</p>
                </div> */}
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer