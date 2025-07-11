import './chef.css';
import chef from '../../Images/chef.png';
import review1 from '../../Images/review1.png';
import review2 from '../../Images/review2.png';
import review3 from '../../Images/review3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Chef(){
    return(
        <div className="mt-5 d-flex row overflow-hidden">
            <div className="d-none d-lg-flex d-flex col-sm-12 col-lg-6 align-items-end justify-content-center gap-5">
                <div className='d-flex position-relative justify-content-center align-items-end'>
                    <div className="bg-chef position-absolute"/>
                    <div className="chef d-flex align-items-end">
                        <img src={chef} alt="chef" />
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-lg-6 d-flex align-items-center">
                <div>
                    <div className='chef-left'>
                        <p className='text-uppercase fw-bold text-danger top-title'>Testimonials</p>
                        <h2 className='fw-bolder'>What Our Customers Say About Us</h2>
                        <p className='desc'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center'>
                            <img className='review' src={review1} alt="review1" />
                            <img className='review' src={review2} alt="review2" />
                            <img className='review me-3' src={review3} alt="review3" />
                        </div>
                        <div className='mt-2'>
                            <h5 className='fw-bolder'>Customer Feedback</h5>
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <p className="mb-0 ms-1 fw-bolder">4.9</p>
                                    <p className="mb-0 ms-2">(18.6k Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef;