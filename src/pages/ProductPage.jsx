import { useContext, useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/contexts/CartContextProvider";
import CartListModal from "../components/modals/CartListModal";
import FloatingCartList from "../components/floating/FloatingCartList";
import { ProductContext } from "../components/contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Ratings from "../components/Ratings";

function ProductPage() {
  const addToCart = useContext(CartContext).addToCart;
  const [isFetching, setIsFetching] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const formatPHP = useContext(ProductContext).formatPHP;
  const products = useContext(ProductContext).products;
  const cartList = useContext(CartContext).cartList;
  const navigate = useNavigate();

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
      <div className="sm:container mx-auto">
        <CartListModal />
        <FloatingCartList />
        <div className="lg:flex m-5 p-5 space-x-5 space-y-5 rounded-xl bg-ct-F2F7F2 dark:bg-ct-222824">
          <div className=" flex items-center">
            <img
              src={product.image}
              alt="Product Image"
              className="object-contain lg:size-[600px]"
            />
          </div>
          <div className="lg:w-2/3 space-y-2">
            <div className="text-3xl font-bold bg-green-200 space-y-2">
              <div>{product.title}</div>
            </div>

            <div className="flex items-center bg-red-200 space-x-2">
              <div className="text-3xl font-bold">
                {formatPHP(product.price)}
              </div>
              <Ratings rating={4.5} starSize={20} />
              <div className="text-xl">{(2).toFixed(1)}</div>
            </div>

            <div className="bg-blue-200 h-1/3">
              <button
                className="mt-4 ml-3 h-10 mr-3 py-1 px-2 mb-1 font-bold bg-ct-5D985E text-xl border-2 border-black rounded-md text-ct-F2F7F2"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className={
                  "mt-4 ml-4 h-10 py-1 px-2 mb-1 font-bold bg-ct-5D985E text-xl border-2 border-black rounded-md text-ct-F2F7F2 " +
                  (cartList.length > 0 ? " " : " hidden")
                }
              >
                Check Out
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
