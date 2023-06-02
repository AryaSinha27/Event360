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
          src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Gateway/DC/water_bottles_lunch_boxes_BVD_PC_May-revised-3000x1200._CB589055078_.jpg"
          alt=""
        />

        
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>

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
