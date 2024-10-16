import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext([]);

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a useCartContext");
  }
  return context;
}

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  function addToCart(product) {
    const duplicateIndex = cartList.findIndex((item) => item.id === product.id);
    if (duplicateIndex > -1) {
      const item = cartList[duplicateIndex];
      increaseItemCount(item, duplicateIndex);
      return;
    }

    const tempcart = [...cartList];
    tempcart.push({ ...product, count: 1 });
    setCartList(tempcart);
    addToTotal(1, product.price);
  }

  function decreaseItemCount(item, index) {
    if (item.count - 1 < 1) {
      removeFromCart(item.id);
      return;
    }

    const tempcart = [...cartList];
    tempcart[index] = { ...item, count: item.count - 1 };
    setCartList(tempcart);
    deductToTotal(1, item.price);
  }
  function increaseItemCount(item, index) {
    const tempcart = [...cartList];
    tempcart[index] = { ...item, count: item.count + 1 };

    setCartList(tempcart);
    addToTotal(1, item.price);
  }

  function removeFromCart(index) {
    const removeCart = [...cartList];
    const item = removeCart[index];
    deductToTotal(item.count, item.count * item.price);
    removeCart.splice(index, 1);
    setCartList(removeCart);
  }

  function addToTotal(newCount, newAmount) {
    setTotalCount((prev) => prev + newCount);
    setTotalAmount((prev) => prev + newAmount);
  }

  function deductToTotal(newCount, newAmount) {
    setTotalCount((prev) => prev - newCount);
    setTotalAmount((prev) => prev - newAmount);
  }

  function checkOut() {
    setCartList([]);
    navigate("/");
    setTimeout(() => window.alert("Order Successful!"), 500);
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
        totalCount,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
