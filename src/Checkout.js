import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket ,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0LrvsThp066u4FcnyEH1MR-xRdw6tad5Wg&usqp=CAU"
          alt=""
        />

        
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout_title">Your Event shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CheckoutProduct*/}
          {/* CheckoutProduct*/}
          {/* CheckoutProduct*/}
          {/* CheckoutProduct*/}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
