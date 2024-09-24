import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/products/ProductList";
import LoginModal from "./components/login/LoginModal"
// import { products } from "./assets/temp-products";

function App(){
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json()).then(data=>setProducts(data));
  },[products]);

  return(
    <div className="bg-ct-light-tanly-DADED4 dark:bg-neutral-950">
      <NavBar />
      <LoginModal/>
      <ProductList products={products}/>
    </div>
  );
}

export default App  