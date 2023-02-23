import "./HorizontalItem.css";

export default function HorizontalItem() {
  return (
    <div className="horizontal-item">
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="horizontal-item-details">
        <span className="item-name">Milk Burfi Italian</span>
        <span className="item-price">$ 200</span>
        <span className="item-quantity">20</span>
      </div>
    </div>
  );
}
