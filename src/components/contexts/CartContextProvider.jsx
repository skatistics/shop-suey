import React, { useEffect, useLayoutEffect } from "react";
import { createContext, useState } from "react";
export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let tempAmount = 0;
    cartList.forEach((item) => {
      tempAmount += item.price * item.count;
    });
    setTotalAmount(tempAmount);
  }, [cartList]);

  function addToCart(product) {
    const duplicate = cartList.find((item) => item.id === product.id);

    if (duplicate) {
      increaseItemCount(product.id);
    } else {
      const tempcart = [...cartList];
      tempcart.push({ ...product, count: 1 });
      setCartList(tempcart);
    }
  }

  function decreaseItemCount(id) {
    const tempcart = [...cartList];
    const item = cartList.find((item) => item.id === id);
    if (item.count - 1 < 1) {
      removeFromCart(id);
    }

    const finalTempcart = tempcart.map((item) => {
      if (item.id == id) {
        item = { ...item, count: item.count - 1 };
      }
      return item;
    });

    setCartList(finalTempcart);
  }
  function increaseItemCount(id) {
    const tempcart = [...cartList];

    const finalTempcart = tempcart.map((item) => {
      if (item.id == id) {
        item = { ...item, count: item.count + 1 };
      }
      return item;
    });

    setCartList(finalTempcart);
  }

  function removeFromCart(id) {
    const removeCart = [...cartList];
    const removeHandler = removeCart.filter((product) => product.id !== id);
    setCartList(removeHandler);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        decreaseItemCount,
        increaseItemCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
