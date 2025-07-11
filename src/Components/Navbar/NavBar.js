import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBagShopping, faMagnifyingGlass, faPhoneVolume, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";
import logo from '../../Images/logo.png'
import { useState } from "react";

function Navbar(){
    const [show, setShow] = useState(false);

    return(
        <div className="d-flex navbar justify-content-between align-items-center shadow-lg">
            <Link to={'/'}>
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="d-none d-lg-flex gap-5">
                <Link className="link" to={'/'}>Home</Link>
                <Link className="link d-flex align-items-center" to={'/menu'}>
                    <span>Menu</span>
                    <FontAwesomeIcon className="arrowdown ms-2" icon={faAngleDown} />
                </Link>
                <Link className="link d-flex align-items-center" to={'/services'}>
                    <span>Services</span>
                    <FontAwesomeIcon className="arrowdown ms-2" icon={faAngleDown} />
                </Link>
                <Link className="link" to={'/offers'}>Offers</Link>
            </div>
            <div className="d-none d-lg-flex gap-4 align-items-center">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                <FontAwesomeIcon className="icon" icon={faBagShopping} />
                <div className="btn btn-Contact text-nowrap rounded-5 P-5">
                    <FontAwesomeIcon className="me-2" icon={faPhoneVolume} />
                    <span>Contact</span>
                </div>
            </div>

            <div onClick={()=> setShow(true)} className="d-flex d-lg-none">
                <FontAwesomeIcon className="icon" icon={faBars} />
            </div>

            {show && 
                <div className="nav-menu shadow-lg rounded-4 d-lg-none">
                    <div onClick={()=> setShow(false)} className="close">
                        <FontAwesomeIcon className="close-icon" icon={faXmark} />
                    </div>
                    <div className="nav-menu-link"><Link className="link" to={'/'}>Home</Link></div>
                    <div className="nav-menu-link"><Link className="link d-flex align-items-center" to={'/menu'}>
                        <span>Menu</span>
                        <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                    </Link></div>
                    <div className="nav-menu-link"><Link className="link d-flex align-items-center" to={'/services'}>
                        <span>Services</span>
                        <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                    </Link></div>
                    <div className="nav-menu-link"><Link className="link" to={'/offers'}>Offers</Link></div>
                </div>
            }

        </div>
    )
}

export default Navbar;