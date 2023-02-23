import HorizontalItem from "../Components/HorizontalItem";
import "./Cart.css";

export default function Cart() {
  return (
    <section className="cart-section">
      <div className="container">
        <HorizontalItem />
        <HorizontalItem />
        <HorizontalItem />
        <HorizontalItem />
        <HorizontalItem />
        <HorizontalItem />
        <div className="button">
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </section>
  );
}
