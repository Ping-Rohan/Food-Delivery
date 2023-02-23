import "./HorizontalItem.css";

export default function HorizontalItem() {
  return (
    <div className="horizontal-item">
      <div className="item-img">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="horizontal-item-details">
        <div className="horizontal-title">
          <span className="horizontal-heading">Food Name</span>
          <span className="item-name">Milk Burfi Italian</span>
        </div>
        <div className="horizontal-title">
          <span className="horizontal-heading">Price</span>
          <span className="item-price">$ 200</span>
        </div>
        <div className="horizontal-title">
          <span className="horizontal-heading">Quantity</span>
          <span className="item-quantity">20</span>
        </div>
        <div className="horizontal-title total">
          <span className="horizontal-heading">Total</span>
          <span className="item-total">$4000</span>
        </div>
      </div>
    </div>
  );
}
