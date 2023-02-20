import React, { useEffect } from "react";
import "./HomePage.css";
import FoodItem from "../Components/FoodItem";
import { getMyProfile } from "../Store/UserReducer";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
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
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </div>
      </div>
    </section>
  );
}
