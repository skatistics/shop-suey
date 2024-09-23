import { useState, useEffect } from "react";
import ProductList from "./components/products/ProductList";

function App(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json()).then(data=>setProducts(data));
  },[products]);

  return(
    <ProductList products={products}/>
  );
}

export default App