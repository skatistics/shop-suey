import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/products/ProductList";
import LoginModal from "./components/login/LoginModal";
import TempPage from "./components/login/TempPage";

function App(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json()).then(data=>setProducts(data));
  },[products]);

  return(
    <>
      <NavBar />
      <TempPage/>
      <LoginModal/>
      <ProductList products={products}/>

    </>
  );
}

export default App