import './main.css';
import Intersect from '../../Images/Intersect.png';
import Mask from '../../Images/Mask group.png';
import Mask1 from '../../Images/Mask group (1).png';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function Main(){
    return(
        <div className="mt-5 d-flex row overflow-hidden">
            <div className="col-sm-12 col-lg-6 left-div pe-lg-5 pt-5 mt-4">
                <div>
                    <span className='title-span fw-bold'>Dive into Delights Of Delectable</span>
                    <span className="title-span color-primary fw-bold"> Food</span>
                </div>
                <div>
                    <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                </div>

                <div className='d-flex gap-3 pb-3'>
                    <div className='title-btn d-flex align-items-center btn text-nowrap rounded-5 order-now'>Order Now</div>
                    <div className='title-btn d-flex align-items-center btn text-nowrap rounded-5 watch-video gap-2'>
                        <span>Watch Video</span>
                        <div className='watch-div d-flex justify-content-center align-items-center'><FontAwesomeIcon className='watch-icon' color='#000' icon={faPlay} /></div>
                    </div>
                </div>
            </div>

            <div className='d-none d-lg-flex col-sm-12 col-md-6 d-flex align-items-end justify-content-center pt-5 mt-4'>
                <div className='img-Intersect d-flex align-items-end justify-content-center'>
                    <img src={Intersect} alt="" />
                </div>

                <div className="d-flex gap-5 justify-content-between position-absolute">
                    <div className="hint d-flex align-items-center rounded-4 p-3 gap-3 shadow-lg">
                        <img src={Mask} alt="Mask" />
                        <div>
                            <h6 className='text-nowrap fw-bold mb-0'>Vegetarian salad</h6>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon className='start-icon' icon={faStar} /></span>
                            <span><FontAwesomeIcon className='start-icon' icon={faStar} /></span>
                            <p className='text-nowrap mb-0 fw-bold'>18.00<span className='text-danger'> $</span></p>
                        </div>
                    </div>
                    <div className="hint d-flex align-items-center rounded-4 p-3 gap-3 shadow-lg">
                        <img src={Mask1} alt="Mask1" />
                        <div>
                            <h6 className='text-nowrap fw-bold mb-0'>Vegetarian salad</h6>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon color='yellow' className='start-icon' icon={faStarSolid} /></span>
                            <span><FontAwesomeIcon className='start-icon' icon={faStar} /></span>
                            <p className='text-nowrap mb-0 fw-bold'>23.00<span className='text-danger'> $</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;