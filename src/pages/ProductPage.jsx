import { useContext, useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/contexts/CartContextProvider";
import CartListModal from "../components/modals/CartListModal";
import FloatingCartList from "../components/floating/FloatingCartList";

function ProductPage() {
  const addToCart = useContext(CartContext).addToCart;
  const [isFetching, setIsFetching] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const formatter = new Intl.NumberFormat("tl-PH", {
    style: "currency",
    currency: "PHP",
  });

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=150")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const id = parseInt(productId);
    const currentProduct = products.find((item) => item.id === id);
    setProduct(currentProduct);
    if (products.length > 0) {
      setIsFetching(false);
    }
  }, [products, productId]);

  if (!isFetching && !product) {
    return <NotFoundPage />;
  }

  if (product) {
    return (
      <div className="lg:container mx-auto">
        <CartListModal />
        <FloatingCartList />
        <div className="lg:flex p-5 bg-ct-F2F7F2">
          <div className="lg:size-[600px] bg-ct-D9E8D9 flex items-center p-2">
            <img src={product.image} alt="" />
          </div>
          <div className="lg:w-2/3 px-5 bg-yellow-200">
            <div className="text-3xl font-bold bg-green-200 h-1/3 space-y-2">
              <div>{product.title}</div>
              <div className="text-2xl">Brand: {product.brand}</div>
            </div>

            <div className="flex items-center bg-red-200 h-1/3">
              <div className="text-3xl font-bold">
                {formatter.format(product.price * 50)}
              </div>

              <div className="mx-5 text-xl font-bold border-4 p-2">
                Category: {product.category}
              </div>
            </div>

            <div className="bg-blue-200 h-1/3">
              <button className="text-2xl border-2 border-black rounded-md">
                Check Out
              </button>
              <button
                className="text-2xl h-10 px-2 rounded-md border-2 border-black"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 ">
          <div>Product Details</div>
          <div className="bg-green-200 space-y-2 p-4">
            <ul className="list-disc list-inside">
              <li>Brand: {product.brand}</li>
              <li>Model: {product.model}</li>
              <li>Color: {product.color}</li>
            </ul>
            <p>{product.description}</p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
