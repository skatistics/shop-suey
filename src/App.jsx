import NavBar from "./components/NavBar";

function App(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json()).then(data=>setProducts(data));
  },[products]);

  return(
    <>
      <NavBar />
      <ProductList products={products}/>
    </>
  );
}

export default App