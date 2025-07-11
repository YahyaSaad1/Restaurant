import "./meals.css";
import meal1 from '../../Images/meal1.png';
import meal2 from '../../Images/meal2.png';
import meal3 from '../../Images/meal3.png';
import meal4 from '../../Images/meal4.png';
import { Link } from "react-router";


function Meals(){
    const meals = [
        {name:'Main Dish',num:'86 dishes', link:'/', image: meal1},
        {name:'Break Fast',num:'12 break fast', link:'/', image: meal2},
        {name:'Dessert',num:'48 dessert', link:'/', image: meal3},
        {name:'Browse All',num:'255 Items', link:'/', image: meal4},
    ]
    return(
        <div className="mt-5 pb-5">
            <div className="d-flex flex-column align-items-center">
                <p className="text-uppercase fw-bold text-danger top-title">Customer Favorites</p>
                <h2 className="fw-bold mt-0">Popular Catagories</h2>
            </div>

            <div className="d-flex justify-content-between mt-5 row row-gap-4">
                {meals.map((meal, index)=>{
                    return(
                        <Link key={index} to={'/'} className="text-decoration-none col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="meal rounded-4 shadow-lg d-flex flex-column align-items-center justify-content-center">
                                <div className="bg-meal d-flex align-items-center justify-content-center"><img src={meal.image} alt={meal.meal1} /></div>
                                <h4 className="mt-3">{meal.name}</h4>
                                <p className="mt-2">({meal.num})</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Meals;