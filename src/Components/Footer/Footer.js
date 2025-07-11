import { Link } from 'react-router';
import logo from '../../Images/logo.png';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer>
            <div className="row mt-5 row-gap-4 footer">
                <div className="col-sm-6 col-lg-3 mt-3 pe-5">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <p className='mt-4'>Savor the artistry where every dish is a culinary masterpiece</p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-3">
                    <h4>Useful links</h4>
                    <Link className='footer-link' to={'/'}>About us</Link>
                    <Link className='footer-link' to={'/'}>Events</Link>
                    <Link className='footer-link' to={'/'}>Blogs</Link>
                    <Link className='footer-link' to={'/'}>FAQ</Link>
                </div>
                <div className="col-sm-6 col-lg-3 mt-3">
                    <h4>Main Menu</h4>
                    <Link className='footer-link' to={'/'}>Home</Link>
                    <Link className='footer-link' to={'/'}>Offers</Link>
                    <Link className='footer-link' to={'/'}>Menus</Link>
                    <Link className='footer-link' to={'/'}>Reservation</Link>
                </div>
                <div className="col-sm-6 col-lg-3 mt-3">
                    <h4>Contact Us</h4>
                    <Link className='footer-link'>yahyasaad2024@email.com</Link>
                    <Link className='footer-link'>+201127471188</Link>
                    <Link className='footer-link'>Social media</Link>
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-between mt-5 mb-3'>
                <div className='d-flex gap-4 justify-content-center justify-content-md-start mb-3 mb-md-0'>
                    <a href={'https://yahyasaad.vercel.app/'} target="_blank" rel="noopener noreferrer" className='social-media d-flex justify-content-center align-items-center shadow-sm'>
                        <FontAwesomeIcon className='footer-icon1' icon={faUser} />
                    </a>
                    <a href={'https://github.com/YahyaSaad1'} target="_blank" rel="noopener noreferrer" className='social-media d-flex justify-content-center align-items-center shadow-sm'>
                        <FontAwesomeIcon className='footer-icon' icon={faGithub} />
                    </a>
                    <a href={'https://wa.me/201127471188'} target="_blank" rel="noopener noreferrer" className='social-media d-flex justify-content-center align-items-center shadow-sm'>
                        <FontAwesomeIcon className='footer-icon' icon={faWhatsapp} />
                    </a>
                    <a href={'https://www.facebook.com/yahyasaad24'} target="_blank" rel="noopener noreferrer" className='social-media d-flex justify-content-center align-items-center shadow-sm'>
                        <FontAwesomeIcon className='footer-icon' icon={faFacebookF} />
                    </a>
                </div>

                <div className='text-center text-md-start'>
                    <p className='rights mt-3'>All rights reserved | Yahya Saad (2025)</p>
                </div>


                <div className="d-none d-md-block" />
                <div className="d-none d-md-block" />
            </div>

        </footer>
    )
}

export default Footer;