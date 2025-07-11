import './culinary.css';
import Catering from '../../Images/Catering.png';
import Fast from '../../Images/Fast.png';
import Online from '../../Images/Online.png';
import Gift from '../../Images/Gift.png';

function Culinary(){
    const culinaries = [
        {title: 'Catering', desc: 'Delight your guests with our flavors and  presentation', image: Catering},
        {title: 'Fast', desc: 'We deliver your order promptly to your door', image: Fast},
        {title: 'Online', desc: 'Explore menu & order with ease using our Online Ordering ', image: Online},
        {title: 'Gift', desc: 'Give the gift of exceptional dining with Foodi Gift Cards', image: Gift},
    ]
    return(
        <div className="mt-5 d-flex row overflow-hidden">
            <div className="col-sm-12 col-lg-6 d-flex align-items-center">
                <div>
                    <div className='chef-left'>
                        <p className='text-uppercase fw-bold text-danger top-title'>Our Story & Services</p>
                        <h2 className='fw-bolder'>Our Culinary Journey And Services</h2>
                        <p className='desc'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                    </div>
                    <div className='d-flex mb-3'>
                        <div className='title-btn d-flex align-items-center btn text-nowrap rounded-5 order-now pt-3 pb-3 ps-5 pe-5'>Explore</div>
                    </div>
                </div>
            </div>

            <div className="p-5 col-sm-12 col-lg-6 row d-flex align-items-center row-gap-4">
                    {culinaries.map((culinary, index)=>{
                        return(
                            <div className="col-sm-12 col-md-6">
                                <div key={index} className="card-culinary d-flex flex-column align-items-center justify-content-center text-center shadow-lg">
                                    <img src={culinary.image} alt="Catering" />
                                    <h3 className="mt-3 text-uppercase fw-bold">{culinary.title}</h3>
                                    <p>{culinary.desc}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Culinary;