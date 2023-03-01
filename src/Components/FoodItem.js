import { AiFillStar } from "react-icons/ai";
import "./FoodItem.css";

export default function FoodItem({
  image,
  foodName,
  rating,
  price,
  stocks,
  sold,
}) {
  return (
    <div className="food-item">
      <div className="image-heading">
        <img src={`http://localhost:5000/${image}`} alt="" />
        <h2 className="food-name">{foodName}</h2>
        <div className="rating">
          <AiFillStar className="star" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="food-details">
        <div className="price col">
          <span className="details-heading">Price</span>
          <span className="price-details details-info">${price}</span>
        </div>
        <div className="stocks col">
          <span className="details-heading">Stocks</span>
          <span className="price-details details-info">{stocks}</span>
        </div>
        <div className="ordered col ">
          <span className="details-heading">Sold</span>
          <span className="price-details details-info">{sold}</span>
        </div>
      </div>
    </div>
  );
}
