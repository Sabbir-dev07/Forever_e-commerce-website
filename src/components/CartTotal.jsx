import React, { useContext } from "react";
import { Shopcontext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(Shopcontext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shiping Fee</p>
          <p>
            {" "}
            {currency}
            {delivery_fee}.00{" "}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <p>
            {" "}
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
