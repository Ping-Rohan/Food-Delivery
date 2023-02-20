import { AiFillStar } from "react-icons/ai";
import "./FoodItem.css";

export default function FoodItem() {
  return (
    <div className="food-item">
      <div className="image-heading">
        <img
          src="https://img.freepik.com/premium-photo/sweet-food-kaju-katli_57665-14750.jpg?w=900"
          alt=""
        />
        <h2 className="food-name">Milk Powder Barfi</h2>
        <div className="rating">
          <AiFillStar className="star" />
          <span>4.5</span>
        </div>
      </div>
      <div className="food-details">
        <div className="price col">
          <span className="details-heading">Price</span>
          <span className="price-details details-info">$300</span>
        </div>
        <div className="stocks col">
          <span className="details-heading">Stocks</span>
          <span className="price-details details-info">1200</span>
        </div>
        <div className="ordered col ">
          <span className="details-heading">Ordered</span>
          <span className="price-details details-info">300</span>
        </div>
      </div>
    </div>
  );
}
