import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.png';
import { Link } from "react-router";
import { useState } from "react";

function Menu(){
    const meals = [
        {title:'Fattoush salad',description:'Description of the item', price:'24.00', evaluation:'4.9', link:'/', image: img1},
        {title:'Vegetable salad',description:'Description of the item', price:'26.00', evaluation:'4.6', link:'/', image: img2},
        {title:'Egg vegi salad',description:'Description of the item', price:'23.00', evaluation:'4.5', link:'/', image: img3},
    ]

    const [favorites, setFavorites] = useState(Array(meals.length).fill(false));

    const toggleFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };

    return(
        <div className="mt-5 mb-5">
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <p className="text-uppercase fw-bold text-danger top-title">Special Dishes</p>
                    <h2 className="fw-bolder">Standout Dishes <br />From Our Menu</h2>
                </div>
                <div className="d-flex gap-3 arrow">
                    <div className="d-flex justify-content-center align-items-center"><FontAwesomeIcon className="icon" icon={faAngleLeft} /></div>
                    <div className="d-flex justify-content-center align-items-center"><FontAwesomeIcon className="icon" icon={faAngleRight} /></div>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-3 row row-gap-4">
                {meals.map((meal, index)=>{
                    return(
                        <Link key={index} to={meal.link} className="text-decoration-none col-sm-12 col-md-6 col-xl-4">
                            <div className="menu shadow-lg justify-content-center position-relative">
                                <div  onClick={(e) => {e.preventDefault(); toggleFavorite(index);}} className="favorites position-absolute d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon className="heart-icon" color="white" icon={favorites[index] ? faHeartSolid : faHeart} />
                                </div>
                                <div className="d-flex align-items-center justify-content-center"><img src={meal.image} alt={meal.meal1} /></div>
                                <h4 className="mt-3 fw-bold">{meal.title}</h4>
                                <p className="mt-2">{meal.description}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="mt-2 fw-bold">{meal.price}<span className="text-danger"> $</span></p>
                                    <p className="mt-2 fw-bold"><span className="text-danger"><FontAwesomeIcon color="yellow" icon={faStar} /></span> {meal.evaluation}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;