import React, { useEffect } from "react";
import "./HomePage.css";
import FoodItem from "../Components/FoodItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFoods } from "../Store/FoodReducer";

export default function HomePage() {
  const foods = useSelector((state) => state.food.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, []);
  return (
    <section className="home">
      <div className="container">
        <div className="topbar">
          <h1>Find the best foods</h1>
          <div className="filter-items">
            <select name="" id="">
              <option value="">Recently Added</option>
              <option value="">Most Sold</option>
              <option value="">Cheap Foods</option>
              <option value="">Most Reviewed</option>
            </select>
          </div>
        </div>
        <div className="food-items">
          {foods.map((food) => {
            return (
              <FoodItem
                image={food.foodImages[0]}
                foodName={food.foodName}
                rating={food.ratings}
                price={food.price}
                sold={food.sold}
                stocks={food.stock}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
